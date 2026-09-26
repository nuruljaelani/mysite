<script lang="ts">
	import { X, Sparkles, Layers, ArrowUpRight } from '@lucide/svelte';
	import { caseStudies } from '$lib/data/portfolioData';

	let { isOpen = false, filter = 'all', onClose = () => {} } = $props<{
		isOpen?: boolean;
		filter?: string;
		onClose?: () => void;
	}>();

	let filteredStudies = $derived.by(() => {
		if (filter === 'AI') {
			return caseStudies.filter((cs) => cs.tags.includes('LLMs') || cs.tags.includes('Prompt Engineering'));
		}
		return caseStudies;
	});
</script>

{#if isOpen}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-all duration-300"
		role="dialog"
		aria-modal="true"
	>
		<div class="bg-[#141519] border border-white/15 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden text-neutral-200">
			<!-- Close Button -->
			<button
				type="button"
				class="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
				onclick={onClose}
				aria-label="Close Case Studies"
			>
				<X size={18} />
			</button>

			<!-- Header -->
			<div class="flex items-center gap-3 pb-6 border-b border-white/10">
				<div class="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white">
					{#if filter === 'AI'}
						<Sparkles size={24} class="text-sky-400" />
					{:else}
						<Layers size={24} class="text-emerald-400" />
					{/if}
				</div>
				<div>
					<h3 class="text-xl font-bold text-white tracking-tight">
						{filter === 'AI' ? 'AI & Autonomous Agent Case Studies' : 'Selected Case Studies & Design Systems'}
					</h3>
					<p class="text-xs text-neutral-400 font-medium">Deep-dive systems & engineering work by Jay</p>
				</div>
			</div>

			<!-- Case Studies List -->
			<div class="py-6 space-y-4 max-h-[60vh] overflow-y-auto pr-2">
				{#each filteredStudies as cs}
					<div class="p-5 rounded-2xl bg-[#1b1d24] border border-white/5 hover:border-white/20 transition-all duration-200 group/item">
						<div class="flex items-start justify-between gap-3">
							<div>
								<span class="text-[11px] font-mono uppercase tracking-wider text-sky-400 font-semibold">{cs.category}</span>
								<h4 class="text-base sm:text-lg font-bold text-white group-hover/item:text-sky-300 transition-colors">
									{cs.title}
								</h4>
							</div>
							<span class="px-2.5 py-1 rounded-full bg-white/10 text-xs font-semibold text-white whitespace-nowrap">
								{cs.metric}
							</span>
						</div>
						<p class="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed">
							{cs.description}
						</p>
						<div class="flex flex-wrap items-center gap-1.5 mt-3 pt-3 border-t border-white/5">
							{#each cs.tags as tag}
								<span class="px-2 py-0.5 rounded-md bg-[#252833] text-[10px] text-neutral-300 font-medium">
									{tag}
								</span>
							{/each}
						</div>
					</div>
				{/each}
			</div>

			<!-- Footer -->
			<div class="pt-4 border-t border-white/10 flex justify-end">
				<button
					type="button"
					class="px-5 py-2 rounded-full bg-white text-black font-semibold text-xs sm:text-sm hover:bg-neutral-200 transition-colors"
					onclick={onClose}
				>
					Back to Dashboard
				</button>
			</div>
		</div>
	</div>
{/if}
