<script lang="ts">
	import { onMount } from 'svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import ProfileCard from '$lib/components/ProfileCard.svelte';
	import TimeSpentCard from '$lib/components/TimeSpentCard.svelte';
	import SkillMatrixCard from '$lib/components/SkillMatrixCard.svelte';
	import HeroStatusCard from '$lib/components/HeroStatusCard.svelte';
	import SystemTelemetryCard from '$lib/components/SystemTelemetryCard.svelte';
	import ExperienceGlobeCard from '$lib/components/ExperienceGlobeCard.svelte';
	import CvModal from '$lib/components/CvModal.svelte';
	import CaseStudiesModal from '$lib/components/CaseStudiesModal.svelte';

	let activeMode = $state('2D');
	let activeTab = $state('Dashboard');
	let scrollVelocity = $state(0);

	let isCvOpen = $state(false);
	let isCaseStudiesOpen = $state(false);
	let caseStudiesFilter = $state('all');

	// Scroll velocity calculation
	onMount(() => {
		let lastScrollY = window.scrollY;
		let lastTime = performance.now();
		let decayTimer: number;

		function handleScroll() {
			const currentScrollY = window.scrollY;
			const currentTime = performance.now();
			const timeDiff = (currentTime - lastTime) / 1000; // in seconds

			if (timeDiff > 0.016) {
				const distance = Math.abs(currentScrollY - lastScrollY);
				scrollVelocity = distance / timeDiff;
				lastScrollY = currentScrollY;
				lastTime = currentTime;

				clearTimeout(decayTimer);
				decayTimer = window.setTimeout(() => {
					// Smooth decay to zero
					const decayInterval = setInterval(() => {
						scrollVelocity *= 0.85;
						if (scrollVelocity < 2) {
							scrollVelocity = 0;
							clearInterval(decayInterval);
						}
					}, 30);
				}, 60);
			}
		}

		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
			clearTimeout(decayTimer);
		};
	});

	function handleOpenCaseStudies() {
		caseStudiesFilter = 'all';
		isCaseStudiesOpen = true;
	}

	function handleOpenArchitecture() {
		caseStudiesFilter = 'all';
		isCaseStudiesOpen = true;
	}

	function handleOpenAi() {
		caseStudiesFilter = 'AI';
		isCaseStudiesOpen = true;
	}
</script>

<div class="min-h-screen flex flex-col justify-between selection:bg-neutral-900 selection:text-white">
	<!-- Top Navigation Bar -->
	<Navbar
		bind:activeMode
		bind:activeTab
		{scrollVelocity}
		onOpenCaseStudies={handleOpenCaseStudies}
	/>

	<!-- Main Bento Grid Container -->
	<main class="flex-1 max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
		<div
			class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch transition-all duration-700 ease-out"
			style={activeMode === '3D'
				? 'transform: perspective(1400px) rotateX(7deg) rotateY(-3deg) scale(0.96); transform-style: preserve-3d;'
				: activeMode === 'VR'
				? 'transform: perspective(900px) rotateY(4deg) scale(0.98);'
				: activeMode === 'AR'
				? 'filter: contrast(110%) saturate(120%);'
				: ''}
		>
			<!-- Row 1, Col 1: Profile Statement (25% width on desktop) -->
			<div class="col-span-1 md:col-span-1 lg:col-span-3 flex flex-col">
				<ProfileCard />
			</div>

			<!-- Row 1, Col 2: Design Time Spent Arc Gauge (25% width on desktop) -->
			<div class="col-span-1 md:col-span-1 lg:col-span-3 flex flex-col">
				<TimeSpentCard />
			</div>

			<!-- Row 1, Col 3: Skill Matrix & Botanical Garden (50% width on desktop) -->
			<div class="col-span-1 md:col-span-2 lg:col-span-6 flex flex-col">
				<SkillMatrixCard />
			</div>

			<!-- Row 2, Col 1: 0 -> 1 UX/UI AI & Night Skyline (33.3% width on desktop) -->
			<div class="col-span-1 md:col-span-1 lg:col-span-4 flex flex-col">
				<HeroStatusCard />
			</div>

			<!-- Row 2, Col 2: System Telemetry & Pipeline Simulator (33.3% width on desktop) -->
			<div class="col-span-1 md:col-span-1 lg:col-span-4 flex flex-col">
				<SystemTelemetryCard onOpenArchitecture={handleOpenArchitecture} />
			</div>

			<!-- Row 2, Col 3: My Experience & 3D Interactive Globe (33.3% width on desktop) -->
			<div class="col-span-1 md:col-span-2 lg:col-span-4 flex flex-col">
				<ExperienceGlobeCard onOpenCv={() => (isCvOpen = true)} />
			</div>
		</div>
	</main>

	<!-- Minimal Footer -->
	<footer class="w-full max-w-[1600px] mx-auto px-6 lg:px-8 py-6 flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-600 border-t border-black/10 select-none">
		<div class="flex items-center gap-2">
			<span class="w-2 h-2 rounded-full bg-emerald-500"></span>
			<span class="text-neutral-700 font-medium">Available for select fullstack engineering & backend architecture roles</span>
		</div>
		<div class="flex items-center gap-4">
			<a href="#cv" onclick={(e) => { e.preventDefault(); isCvOpen = true; }} class="hover:text-neutral-900 transition-colors">CV</a>
			<a href="#casestudies" onclick={(e) => { e.preventDefault(); handleOpenCaseStudies(); }} class="hover:text-neutral-900 transition-colors">Case Studies</a>
			<span>&copy; {new Date().getFullYear()} Jay. All rights reserved.</span>
		</div>
	</footer>

	<!-- Interactive Modals -->
	<CvModal isOpen={isCvOpen} onClose={() => { isCvOpen = false; activeTab = 'Dashboard'; }} />
	<CaseStudiesModal isOpen={isCaseStudiesOpen} filter={caseStudiesFilter} onClose={() => { isCaseStudiesOpen = false; activeTab = 'Dashboard'; }} />
</div>
