<script lang="ts">
	import { Headphones, Play, Pause } from '@lucide/svelte';
	import { soundEngine } from '$lib/audio/soundEngine';

	let isPlaying = $state(false);
	let currentTimeSeconds = $state(0);
	const totalDurationSeconds = 413; // 06:53

	function formatTime(seconds: number): string {
		const mins = Math.floor(seconds / 60);
		const secs = Math.floor(seconds % 60);
		return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
	}

	function togglePlay() {
		soundEngine.playClick();
		if (isPlaying) {
			soundEngine.stopMusic();
			isPlaying = false;
		} else {
			soundEngine.startMusic((time) => {
				currentTimeSeconds = (currentTimeSeconds + 2.4) % totalDurationSeconds;
			});
			isPlaying = true;
		}
	}

	function handleProgressClick(e: MouseEvent) {
		const target = e.currentTarget as HTMLElement;
		const rect = target.getBoundingClientRect();
		const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
		currentTimeSeconds = Math.round(pct * totalDurationSeconds);
		soundEngine.playClick();
	}

	let progressPercent = $derived((currentTimeSeconds / totalDurationSeconds) * 100);
</script>

<div class="bento-card flex flex-col justify-between p-7 sm:p-8 min-h-[480px] h-full relative overflow-hidden group select-none">
	<!-- Top Header -->
	<div class="flex items-center gap-2 text-neutral-400 text-xs font-semibold tracking-wider uppercase">
		<Headphones size={15} class="text-neutral-400" />
		<span>PODCAST</span>
	</div>

	<!-- Central Tactile Audio Player Module -->
	<div class="my-auto w-full max-w-sm mx-auto bg-[#181a20] border border-white/10 rounded-2xl p-5 sm:p-6 shadow-2xl relative overflow-hidden">
		<!-- Speaker Grille Texture Header -->
		<div class="w-full pb-4 mb-4 border-b border-white/5 flex flex-col items-center">
			<!-- Dotted acoustic mesh -->
			<div class="w-full h-2 flex justify-center gap-1 opacity-20 mb-2">
				{#each Array(24) as _}
					<div class="w-1 h-1 rounded-full bg-white"></div>
				{/each}
			</div>
			<span class="text-[10px] font-mono tracking-widest text-neutral-400 uppercase font-semibold">
				THE PRAGMATIC ENGINEER
			</span>
		</div>

		<!-- Player Main Content: Vinyl + Details -->
		<div class="flex items-center gap-4 sm:gap-5">
			<!-- Vinyl Record Graphic with Floating 3D Spheres -->
			<div class="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 flex items-center justify-center">
				<!-- Vinyl Outer Disc -->
				<div
					class="w-full h-full rounded-full bg-[#0d0e12] border-2 border-neutral-800 flex items-center justify-center shadow-xl relative {isPlaying ? 'animate-spin-slow' : ''}"
				>
					<!-- Concentric Grooves -->
					<div class="absolute inset-2 rounded-full border border-neutral-800/80"></div>
					<div class="absolute inset-4 rounded-full border border-neutral-700/60"></div>
					<div class="absolute inset-6 rounded-full border border-neutral-800/80"></div>
					<div class="absolute inset-8 rounded-full border border-neutral-700/60"></div>

					<!-- Center Vinyl Label -->
					<div class="w-8 h-8 rounded-full bg-[#1e2029] border border-neutral-600 flex items-center justify-center">
						<div class="w-2.5 h-2.5 rounded-full bg-[#0b0c0e]"></div>
					</div>

					<!-- Vinyl Sheen / Reflection -->
					<div class="absolute inset-0 rounded-full bg-gradient-to-tr from-white/10 via-transparent to-white/5 pointer-events-none"></div>
				</div>

				<!-- Floating 3D Bubbles / Spheres -->
				<div class="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br from-neutral-300 to-neutral-700 shadow-lg border border-white/20"></div>
				<div class="absolute bottom-1 -left-1 w-4 h-4 rounded-full bg-gradient-to-br from-neutral-400 to-neutral-800 shadow-md border border-white/20"></div>
				<div class="absolute top-8 -left-2 w-3.5 h-3.5 rounded-full bg-gradient-to-br from-neutral-200 to-neutral-600 shadow-md"></div>
			</div>

			<!-- Track Meta & Controls -->
			<div class="flex-1 min-w-0 space-y-2">
				<div>
					<h3 class="text-sm sm:text-base font-bold text-white tracking-tight leading-tight truncate" title="Event-Driven with Kafka & Go">
						Event-Driven with Kafka & Go
					</h3>
					<p class="text-[11px] text-neutral-400 font-medium">Engineering Talk</p>
				</div>

				<!-- Interactive Progress Bar -->
				<button
					type="button"
					class="w-full h-1.5 bg-neutral-800 rounded-full cursor-pointer relative overflow-hidden group/bar block text-left"
					onclick={handleProgressClick}
					onkeydown={(e) => {
						if (e.key === 'ArrowRight') {
							currentTimeSeconds = Math.min(totalDurationSeconds, currentTimeSeconds + 5);
						} else if (e.key === 'ArrowLeft') {
							currentTimeSeconds = Math.max(0, currentTimeSeconds - 5);
						}
					}}
					aria-label="Seek podcast progress"
				>
					<span
						class="h-full bg-white rounded-full transition-all duration-150 block"
						style="width: {progressPercent}%;"
					></span>
				</button>

				<!-- Timers & Spotify Play Button -->
				<div class="flex items-center justify-between pt-1">
					<span class="text-[11px] font-mono text-neutral-400 font-medium">
						{formatTime(currentTimeSeconds)}
					</span>

					<button
						type="button"
						class="w-8 h-8 rounded-full bg-[#1db954] hover:bg-[#1ed760] text-black flex items-center justify-center transition-transform hover:scale-105 shadow-lg shadow-[#1db954]/30 active:scale-95"
						onclick={togglePlay}
						title={isPlaying ? 'Pause Podcast' : 'Play Podcast'}
						aria-label={isPlaying ? 'Pause Podcast' : 'Play Podcast'}
					>
						{#if isPlaying}
							<Pause size={14} class="fill-black text-black" />
						{:else}
							<Play size={14} class="fill-black text-black ml-0.5" />
						{/if}
					</button>

					<span class="text-[11px] font-mono text-neutral-400 font-medium">
						06:53
					</span>
				</div>
			</div>
		</div>
	</div>

	<!-- Bottom Subtitle / Teaser -->
	<div class="text-center">
		<p class="text-xs text-neutral-500 font-medium">
			Episodes exploring microservice resilience, message queues, and fullstack observability.
		</p>
	</div>
</div>
