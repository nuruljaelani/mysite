<script lang="ts">
	import { BarChart3 } from '@lucide/svelte';
	import { skillsCol1, skillsCol2, toolsList } from '$lib/data/portfolioData';
	import { soundEngine } from '$lib/audio/soundEngine';

	let hoveredItem = $state<string | null>(null);

	function handleHover(name: string) {
		hoveredItem = name;
		soundEngine.playClick();
	}
</script>

<div class="bento-card flex flex-col justify-between p-7 sm:p-8 min-h-[480px] h-full relative overflow-hidden group select-none">
	<!-- Top Header -->
	<div class="flex items-center gap-2 text-neutral-400 text-xs font-semibold tracking-wider uppercase mb-3">
		<BarChart3 size={14} class="text-neutral-400" />
		<span>TECH STACK & ARCHITECTURE</span>
	</div>

	<!-- Skills & Tools Grid -->
	<div class="grid grid-cols-12 gap-x-4 gap-y-1 text-xs sm:text-[13px] my-auto">
		<!-- Column Headers -->
		<div class="col-span-8 flex justify-between text-[11px] font-bold text-neutral-500 uppercase tracking-wider pb-1">
			<span class="w-1/2">BACKEND & SYSTEMS</span>
			<span class="w-1/2 pl-2">FRONTEND & DEVOPS</span>
		</div>
		<div class="col-span-4 text-right text-[11px] font-bold text-neutral-500 uppercase tracking-wider pb-1">
			<span>TOOLING</span>
		</div>

		<!-- Skills Column 1 (col-span-4) -->
		<div class="col-span-4 space-y-1.5">
			{#each skillsCol1 as skill}
				<div class="flex items-center justify-between pr-2 py-0.5 rounded transition-colors duration-150 text-neutral-300 hover:text-white hover:bg-white/10">
					<span class="truncate max-w-[160px] xl:max-w-[210px]" title={skill.name}>{skill.name}</span>
					<span class="px-1.5 py-0.2 bg-[#21232b] text-[10px] font-mono rounded text-neutral-400 font-medium shrink-0 ml-1">
						{skill.score}
					</span>
				</div>
			{/each}
		</div>

		<!-- Skills Column 2 (col-span-4) -->
		<div class="col-span-4 space-y-1.5">
			{#each skillsCol2 as skill}
				<div class="flex items-center justify-between px-2 py-0.5 rounded transition-colors duration-150 text-neutral-300 hover:text-white hover:bg-white/10">
					<span class="truncate max-w-[160px] xl:max-w-[210px]" title={skill.name}>{skill.name}</span>
					<span class="px-1.5 py-0.2 bg-[#21232b] text-[10px] font-mono rounded text-neutral-400 font-medium shrink-0 ml-1">
						{skill.score}
					</span>
				</div>
			{/each}
		</div>

		<!-- Tools Column (col-span-4) -->
		<div class="col-span-4 space-y-1.5 text-right pl-2">
			{#each toolsList as tool}
				<div
					class="py-0.5 text-neutral-400 hover:text-white transition-colors duration-150 truncate cursor-default"
					title="{tool.name} ({tool.category})"
				>
					<span>{tool.name}</span>
				</div>
			{/each}
		</div>
	</div>

	<!-- Bottom Botanical Garden Row of Flowers -->
	<div class="relative w-full pt-4 mt-2 border-t border-white/5 flex items-end justify-between overflow-visible">
		<div class="flex items-end gap-2 sm:gap-3 xl:gap-4 overflow-x-visible">
			<!-- Flower 1: Orange 5-petal star -->
			<div class="group/fl cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:rotate-3">
				<svg width="42" height="64" viewBox="0 0 42 64" fill="none">
					<!-- Stem & leaves -->
					<path d="M21 34 V 64" stroke="#2b4736" stroke-width="2.5" stroke-linecap="round" />
					<path d="M21 48 Q 12 42 10 38 Q 16 46 21 52" fill="#386348" />
					<!-- Flower Petals -->
					<g transform="translate(21, 22)">
						<circle cx="0" cy="0" r="18" fill="#f97316" />
						<circle cx="0" cy="0" r="14" fill="#fb923c" />
						<!-- Stamen star -->
						<circle cx="0" cy="0" r="5" fill="#fde047" />
						<path d="M-8 0 L8 0 M0 -8 L0 8 M-6 -6 L6 6 M-6 6 L6 -6" stroke="#1f2937" stroke-width="1.2" stroke-linecap="round" />
					</g>
				</svg>
			</div>

			<!-- Flower 2: Lime Green 4-petal round -->
			<div class="group/fl cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:-rotate-4">
				<svg width="46" height="74" viewBox="0 0 46 74" fill="none">
					<!-- Stem -->
					<path d="M23 40 V 74" stroke="#2b4736" stroke-width="3" stroke-linecap="round" />
					<path d="M23 54 Q 35 48 38 42 Q 31 52 23 58" fill="#4d7c0f" />
					<!-- Petals -->
					<g transform="translate(23, 24)">
						<rect x="-18" y="-18" width="36" height="36" rx="14" fill="#84cc16" />
						<circle cx="0" cy="0" r="7" fill="#facc15" />
						<path d="M-9 0 L9 0 M0 -9 L0 9 M-6 -6 L6 6 M-6 6 L6 -6" stroke="#1c1917" stroke-width="1.3" stroke-linecap="round" />
					</g>
				</svg>
			</div>

			<!-- Flower 3: Sky Blue 6-petal bloom -->
			<div class="group/fl cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:rotate-6">
				<svg width="44" height="68" viewBox="0 0 44 68" fill="none">
					<!-- Stem -->
					<path d="M22 36 V 68" stroke="#2b4736" stroke-width="2.5" stroke-linecap="round" />
					<path d="M22 50 Q 12 46 8 38 Q 16 48 22 54" fill="#386348" />
					<!-- Petals -->
					<g transform="translate(22, 22)">
						<circle cx="0" cy="0" r="17" fill="#0284c7" />
						<circle cx="0" cy="0" r="13" fill="#38bdf8" />
						<circle cx="0" cy="0" r="5.5" fill="#fde047" />
						<path d="M-8 0 L8 0 M0 -8 L0 8 M-5 -5 L5 5 M-5 5 L5 -5" stroke="#0f172a" stroke-width="1.2" stroke-linecap="round" />
					</g>
				</svg>
			</div>

			<!-- Flower 4: Fuchsia Orchid round bloom -->
			<div class="group/fl cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:-rotate-3">
				<svg width="46" height="72" viewBox="0 0 46 72" fill="none">
					<!-- Stem -->
					<path d="M23 38 V 72" stroke="#2b4736" stroke-width="2.5" stroke-linecap="round" />
					<path d="M23 52 Q 33 46 36 40 Q 29 50 23 56" fill="#386348" />
					<!-- Petals -->
					<g transform="translate(23, 22)">
						<circle cx="0" cy="0" r="18" fill="#d946ef" />
						<circle cx="0" cy="0" r="14" fill="#e879f9" />
						<circle cx="0" cy="0" r="6" fill="#facc15" />
						<path d="M-8 0 L8 0 M0 -8 L0 8 M-6 -6 L6 6 M-6 6 L6 -6" stroke="#4a044e" stroke-width="1.2" stroke-linecap="round" />
					</g>
				</svg>
			</div>

			<!-- Flower 5: Crimson Coral Poppy -->
			<div class="group/fl cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:rotate-4">
				<svg width="44" height="66" viewBox="0 0 44 66" fill="none">
					<!-- Stem -->
					<path d="M22 36 V 66" stroke="#2b4736" stroke-width="2.5" stroke-linecap="round" />
					<path d="M22 48 Q 14 42 10 36 Q 16 46 22 52" fill="#386348" />
					<!-- Petals -->
					<g transform="translate(22, 20)">
						<circle cx="0" cy="0" r="17" fill="#ef4444" />
						<circle cx="0" cy="0" r="13" fill="#f87171" />
						<circle cx="0" cy="0" r="5" fill="#fde047" />
						<path d="M-7 0 L7 0 M0 -7 L0 7 M-5 -5 L5 5 M-5 5 L5 -5" stroke="#450a0a" stroke-width="1.2" stroke-linecap="round" />
					</g>
				</svg>
			</div>

			<!-- Flower 6: Marigold Orange Blossom -->
			<div class="group/fl cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:-rotate-5">
				<svg width="46" height="70" viewBox="0 0 46 70" fill="none">
					<!-- Stem -->
					<path d="M23 38 V 70" stroke="#2b4736" stroke-width="2.5" stroke-linecap="round" />
					<!-- Petals -->
					<g transform="translate(23, 22)">
						<circle cx="0" cy="0" r="18" fill="#f97316" />
						<circle cx="0" cy="0" r="13" fill="#fb923c" />
						<circle cx="0" cy="0" r="5.5" fill="#fde047" />
						<path d="M-8 0 L8 0 M0 -8 L0 8 M-6 -6 L6 6 M-6 6 L6 -6" stroke="#431407" stroke-width="1.2" stroke-linecap="round" />
					</g>
				</svg>
			</div>

			<!-- Flower 7: Sunny Ochre Daisy -->
			<div class="group/fl cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:rotate-3">
				<svg width="44" height="68" viewBox="0 0 44 68" fill="none">
					<!-- Stem -->
					<path d="M22 36 V 68" stroke="#2b4736" stroke-width="2.5" stroke-linecap="round" />
					<!-- Petals -->
					<g transform="translate(22, 22)">
						<circle cx="0" cy="0" r="17" fill="#eab308" />
						<circle cx="0" cy="0" r="12" fill="#fde047" />
						<circle cx="0" cy="0" r="5" fill="#ca8a04" />
						<path d="M-7 0 L7 0 M0 -7 L0 7 M-5 -5 L5 5 M-5 5 L5 -5" stroke="#713f12" stroke-width="1.2" stroke-linecap="round" />
					</g>
				</svg>
			</div>

			<!-- Flower 8: Lime Green Daisy -->
			<div class="group/fl cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:rotate-4">
				<svg width="46" height="74" viewBox="0 0 46 74" fill="none">
					<!-- Stem -->
					<path d="M23 40 V 74" stroke="#2b4736" stroke-width="3" stroke-linecap="round" />
					<!-- Petals -->
					<g transform="translate(23, 24)">
						<rect x="-18" y="-18" width="36" height="36" rx="13" fill="#84cc16" />
						<circle cx="0" cy="0" r="6" fill="#fde047" />
						<path d="M-8 0 L8 0 M0 -8 L0 8 M-6 -6 L6 6 M-6 6 L6 -6" stroke="#1c1917" stroke-width="1.3" stroke-linecap="round" />
					</g>
				</svg>
			</div>
		</div>

		<!-- Small Teal Fullstack Badge ("DEV") on the right -->
		<div class="pb-2">
			<span class="inline-flex items-center justify-center px-2 py-1 rounded bg-[#00c7be] text-black font-extrabold text-[11px] font-mono tracking-wider shadow-md cursor-pointer hover:scale-105 transition-transform" title="Production-Grade Fullstack Architecture">
				DEV
			</span>
		</div>
	</div>
</div>
