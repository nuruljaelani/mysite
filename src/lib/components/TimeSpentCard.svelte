<script lang="ts">
	import { onMount } from 'svelte';
	import { Clock } from '@lucide/svelte';
	import { timelineMilestones } from '$lib/data/portfolioData';
	import { soundEngine } from '$lib/audio/soundEngine';

	let progress = $state(1.0); // 0.0 (2014) to 1.0 (2026)
	let isDragging = $state(false);
	let animatedHours = $state(0);
	const targetHours = 25467;

	// Animated count up on mount
	onMount(() => {
		let start = 0;
		const duration = 1600;
		const startTime = performance.now();

		function updateCount(now: number) {
			const elapsed = now - startTime;
			const step = Math.min(elapsed / duration, 1);
			// easeOutExpo
			const ease = step === 1 ? 1 : 1 - Math.pow(2, -10 * step);
			animatedHours = Math.round(ease * targetHours);
			if (step < 1) {
				requestAnimationFrame(updateCount);
			}
		}

		requestAnimationFrame(updateCount);
	});

	// Current active milestone based on progress
	let currentMilestone = $derived.by(() => {
		const idx = Math.min(
			Math.floor(progress * timelineMilestones.length),
			timelineMilestones.length - 1
		);
		return timelineMilestones[idx];
	});

	// Displayed hours based on slider scrubber
	let currentHours = $derived.by(() => {
		if (progress === 1.0 && animatedHours > 0) return animatedHours.toLocaleString();
		const hours = Math.round(1200 + progress * (targetHours - 1200));
		return hours.toLocaleString();
	});

	// Semicircular SVG calculations:
	// Radius 120, Center (160, 150)
	// Semicircle from angle 180° (left, 2014) to 0° (right, 2026)
	const cx = 160;
	const cy = 150;
	const r = 110;

	// Angle for current progress (from PI to 0)
	let currentAngle = $derived(Math.PI * (1 - progress));
	let dotX = $derived(cx + r * Math.cos(currentAngle));
	let dotY = $derived(cy - r * Math.sin(currentAngle));

	function handleArcInteraction(e: MouseEvent | TouchEvent) {
		const svg = (e.currentTarget as Element).getBoundingClientRect();
		const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
		const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

		const dx = clientX - (svg.left + svg.width / 2);
		const dy = (svg.top + svg.height) - clientY;

		// calculate angle in radians from -PI to PI
		let angle = Math.atan2(dy, dx);
		if (angle < 0) angle = 0;
		if (angle > Math.PI) angle = Math.PI;

		const newProgress = Math.max(0, Math.min(1, 1 - angle / Math.PI));
		if (Math.abs(newProgress - progress) > 0.02) {
			soundEngine.playClick();
		}
		progress = newProgress;
	}

	function handleMouseDown(e: MouseEvent) {
		isDragging = true;
		handleArcInteraction(e);
		window.addEventListener('mousemove', handleWindowMouseMove);
		window.addEventListener('mouseup', handleWindowMouseUp);
	}

	function handleWindowMouseMove(e: MouseEvent) {
		if (!isDragging) return;
		// Update progress based on window mouse
		const arcEl = document.getElementById('arc-gauge-svg');
		if (!arcEl) return;
		const rect = arcEl.getBoundingClientRect();
		const dx = e.clientX - (rect.left + rect.width / 2);
		const dy = (rect.top + rect.height) - e.clientY;
		let angle = Math.atan2(dy, dx);
		if (angle < 0) angle = 0;
		if (angle > Math.PI) angle = Math.PI;
		progress = Math.max(0, Math.min(1, 1 - angle / Math.PI));
	}

	function handleWindowMouseUp() {
		isDragging = false;
		window.removeEventListener('mousemove', handleWindowMouseMove);
		window.removeEventListener('mouseup', handleWindowMouseUp);
	}
</script>

<div class="bento-card flex flex-col justify-between p-7 sm:p-8 min-h-[480px] h-full relative overflow-hidden select-none group">
	<!-- Header -->
	<div class="flex items-center gap-2 text-neutral-400 text-xs font-semibold tracking-wider uppercase">
		<Clock size={14} class="text-neutral-400" />
		<span>ENGINEERING TIME SPENT</span>
	</div>

	<!-- Main Metric Counter -->
	<div class="my-auto py-2 text-center flex flex-col items-center justify-center">
		<div class="text-5xl sm:text-6xl font-light tracking-tight text-white font-['Outfit',sans-serif]">
			{currentHours}
		</div>
		<p class="text-xs sm:text-sm text-neutral-400 font-medium tracking-wide mt-1.5">
			Total Engineering Hours
		</p>
		<!-- Active Milestone Pill on Drag/Hover -->
		<div class="mt-3 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-neutral-300 transition-all duration-300 max-w-[280px] truncate">
			<span class="text-white font-semibold">{currentMilestone.year}</span>: {currentMilestone.role} ({currentMilestone.city})
		</div>
	</div>

	<!-- Rainbow Arc Gauge -->
	<div class="relative w-full max-w-[320px] mx-auto mt-2 flex flex-col items-center">
		<!-- SVG Arc -->
		<svg
			id="arc-gauge-svg"
			viewBox="0 0 320 170"
			class="w-full h-auto cursor-pointer touch-none"
			onmousedown={handleMouseDown}
			role="slider"
			tabindex="0"
			aria-label="Timeline scrubber from 2018 to 2026"
			aria-valuenow={Math.round(2018 + progress * 8)}
			aria-valuemin={2018}
			aria-valuemax={2026}
		>
			<defs>
				<!-- Multi-stop chromatic spectrum gradient -->
				<linearGradient id="spectrumGradient" x1="0%" y1="100%" x2="100%" y2="100%">
					<stop offset="0%" stop-color="#ff3b30" />
					<stop offset="18%" stop-color="#ff9500" />
					<stop offset="35%" stop-color="#ffcc00" />
					<stop offset="50%" stop-color="#34c759" />
					<stop offset="68%" stop-color="#00c7be" />
					<stop offset="82%" stop-color="#007aff" />
					<stop offset="92%" stop-color="#af52de" />
					<stop offset="100%" stop-color="#ff2d55" />
				</linearGradient>

				<!-- Glow Filter for the scrubber dot -->
				<filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
					<feGaussianBlur stdDeviation="4" result="coloredBlur" />
					<feMerge>
						<feMergeNode in="coloredBlur" />
						<feMergeNode in="SourceGraphic" />
					</feMerge>
				</filter>
			</defs>

			<!-- Background Track (faint outline) -->
			<path
				d="M 50 150 A 110 110 0 0 1 270 150"
				fill="none"
				stroke="rgba(255,255,255,0.1)"
				stroke-width="14"
				stroke-linecap="round"
			/>

			<!-- Chromatic Rainbow Arc -->
			<path
				d="M 50 150 A 110 110 0 0 1 270 150"
				fill="none"
				stroke="url(#spectrumGradient)"
				stroke-width="10"
				stroke-linecap="round"
				class="transition-opacity duration-300"
			/>

			<!-- Active scrubber knob dot -->
			<circle
				cx={dotX}
				cy={dotY}
				r="9"
				fill="#000000"
				stroke="#ffffff"
				stroke-width="3.5"
				filter="url(#glow)"
				class="cursor-grab active:cursor-grabbing transition-transform hover:scale-125"
			/>
		</svg>

		<!-- Year & City Labels Below the Arc -->
		<div class="w-full flex items-center justify-between px-3 -mt-3 text-xs">
			<span class="text-xl sm:text-2xl font-bold text-white tracking-tight">2018</span>
			<span class="text-[10px] sm:text-xs font-semibold text-neutral-400 tracking-widest uppercase">
				CIREBON &nbsp; JAKARTA &nbsp; REMOTE
			</span>
			<span class="text-xl sm:text-2xl font-bold text-white tracking-tight">2026</span>
		</div>
	</div>
</div>
