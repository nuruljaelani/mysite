/**
 * Web Audio API Engine for interactive ambient lo-fi playback and UI micro-interactions
 */

class SoundEngine {
	private ctx: AudioContext | null = null;
	private isPlaying: boolean = false;
	private isMuted: boolean = false;
	private timerId: number | null = null;
	private masterGain: GainNode | null = null;
	private currentStep: number = 0;

	// Lo-fi chord sequence: Dm9 -> G13 -> Cmaj9 -> Am9
	private chords = [
		[146.83, 220.0, 261.63, 329.63, 392.0], // Dm9
		[196.0, 246.94, 329.63, 392.0, 440.0],  // G13
		[130.81, 196.0, 246.94, 329.63, 392.0], // Cmaj9
		[110.0, 164.81, 220.0, 261.63, 329.63]  // Am9
	];

	private getContext(): AudioContext {
		if (!this.ctx) {
			const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
			this.ctx = new AudioContextClass();
			this.masterGain = this.ctx.createGain();
			this.masterGain.gain.value = this.isMuted ? 0 : 0.28;
			this.masterGain.connect(this.ctx.destination);
		}
		if (this.ctx.state === 'suspended') {
			this.ctx.resume();
		}
		return this.ctx;
	}

	public toggleMute(): boolean {
		this.isMuted = !this.isMuted;
		if (this.masterGain && this.ctx) {
			this.masterGain.gain.setTargetAtTime(this.isMuted ? 0 : 0.28, this.ctx.currentTime, 0.05);
		}
		return this.isMuted;
	}

	public getMuted(): boolean {
		return this.isMuted;
	}

	public playClick(): void {
		if (this.isMuted || typeof window === 'undefined') return;
		try {
			const ctx = this.getContext();
			const osc = ctx.createOscillator();
			const gain = ctx.createGain();

			osc.type = 'sine';
			osc.frequency.setValueAtTime(800, ctx.currentTime);
			osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.04);

			gain.gain.setValueAtTime(0.08, ctx.currentTime);
			gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

			osc.connect(gain);
			if (this.masterGain) gain.connect(this.masterGain);

			osc.start();
			osc.stop(ctx.currentTime + 0.045);
		} catch {
			// ignore audio setup errors on un-interacted DOM
		}
	}

	public startMusic(onTick?: (currentTime: number) => void): void {
		if (typeof window === 'undefined') return;
		this.getContext();
		this.isPlaying = true;
		this.currentStep = 0;

		let elapsed = 0;
		const stepTimeMs = 2400; // time per chord step

		const playChord = () => {
			if (!this.isPlaying || !this.ctx || !this.masterGain) return;
			const chord = this.chords[this.currentStep % this.chords.length];
			this.currentStep++;

			const now = this.ctx.currentTime;

			// Play warm filtered electric piano voices
			chord.forEach((freq, idx) => {
				if (!this.ctx || !this.masterGain) return;
				const osc = this.ctx.createOscillator();
				const filter = this.ctx.createBiquadFilter();
				const gain = this.ctx.createGain();

				osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
				osc.frequency.setValueAtTime(freq, now);

				filter.type = 'lowpass';
				filter.frequency.setValueAtTime(900, now);
				filter.Q.setValueAtTime(1.2, now);

				// gentle envelope
				gain.gain.setValueAtTime(0.001, now);
				gain.gain.linearRampToValueAtTime(0.045, now + 0.15);
				gain.gain.exponentialRampToValueAtTime(0.002, now + 2.2);

				osc.connect(filter);
				filter.connect(gain);
				gain.connect(this.masterGain);

				osc.start(now);
				osc.stop(now + 2.3);
			});

			elapsed += stepTimeMs / 1000;
			if (onTick) onTick(elapsed);

			this.timerId = window.setTimeout(playChord, stepTimeMs);
		};

		playChord();
	}

	public stopMusic(): void {
		this.isPlaying = false;
		if (this.timerId !== null) {
			clearTimeout(this.timerId);
			this.timerId = null;
		}
	}

	public getIsPlaying(): boolean {
		return this.isPlaying;
	}
}

export const soundEngine = new SoundEngine();
