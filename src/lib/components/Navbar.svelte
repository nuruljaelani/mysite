<script lang="ts">
	import { soundEngine } from '$lib/audio/soundEngine';
	import { Volume2, VolumeX } from '@lucide/svelte';

	let {
		activeMode = $bindable('2D'),
		activeTab = $bindable('Dashboard'),
		scrollVelocity = 0,
		onOpenCaseStudies = () => {},
	} = $props<{
		activeMode?: string;
		activeTab?: string;
		scrollVelocity?: number;
		onOpenCaseStudies?: () => void;
	}>();

	const modes = ['2D', '3D'];
	const tabs = ['Dashboard'];

	let isMuted = $state(false);

	function setMode(mode: string) {
		activeMode = mode;
		soundEngine.playClick();
	}

	function setTab(tab: string) {
		activeTab = tab;
		soundEngine.playClick();
		if (tab === 'Case Studies') {
			onOpenCaseStudies();
		}
	}

	function toggleAudio() {
		isMuted = soundEngine.toggleMute();
		soundEngine.playClick();
	}
</script>

<header class="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md transition-all duration-200">
	<div class="max-w-[1600px] mx-auto py-4 px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4 select-none">
		<!-- Left Pill: Mode Switcher -->
		<div class="flex items-center bg-[#18191f] border border-white/10 rounded-full p-1 shadow-lg shadow-black/20">
			{#each modes as mode}
				<button
					type="button"
					class="px-3.5 py-1 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 {activeMode === mode
						? 'bg-white text-black font-semibold shadow-sm'
						: 'text-neutral-400 hover:text-white'}"
					onclick={() => setMode(mode)}
					aria-label="Switch to {mode} mode"
				>
					{mode}
				</button>
			{/each}
		</div>

		<!-- Center Pill: Navigation Tabs -->
		<div class="flex items-center bg-[#18191f] border border-white/10 rounded-full p-1 shadow-lg shadow-black/20">
			{#each tabs as tab}
				<button
					type="button"
					class="px-4 py-1 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 {activeTab === tab
						? 'bg-white text-black font-semibold shadow-sm'
						: 'text-neutral-400 hover:text-white'}"
					onclick={() => setTab(tab)}
					aria-label="View {tab}"
				>
					{tab}
				</button>
			{/each}
		</div>

		<!-- Right Pill Group: Velocity, Sound & Avatar -->
		<div class="flex items-center gap-2">
			<!-- Velocity Tracker -->
			<div
				class="flex items-center justify-center bg-[#18191f] border border-white/10 rounded-full px-3.5 py-1 text-xs font-mono text-neutral-300 shadow-lg shadow-black/20 min-w-17.5"
				title="Live scroll velocity"
			>
				<span>{Math.round(scrollVelocity)} px/s</span>
			</div>

			<!-- Audio Toggle Button -->
			<button
				type="button"
				class="flex items-center justify-center w-8 h-8 rounded-full bg-[#18191f] border border-white/10 text-neutral-300 hover:text-white hover:border-white/30 transition-all duration-200 shadow-lg shadow-black/20"
				onclick={toggleAudio}
				title={isMuted ? 'Unmute audio' : 'Mute audio'}
				aria-label={isMuted ? 'Unmute sound' : 'Mute sound'}
			>
				{#if isMuted}
					<VolumeX size={15} />
				{:else}
					<Volume2 size={15} />
				{/if}
			</button>

			<!-- Profile Avatar Thumbnail -->
			<div class="relative group cursor-pointer">
				<img
					src="/images/jay.webp"
					alt="Jay avatar"
					class="w-8 h-8 rounded-full object-cover ring-1 ring-white/30 group-hover:ring-white/80 transition-all duration-200 shadow-md"
				/>
				<span class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-1 ring-[#18191f]"></span>
			</div>
		</div>
	</div>
</header>
