<script lang="ts">
	import { X, Download, FileText, CheckCircle2, MapPin, Building, Calendar } from '@lucide/svelte';
	import { soundEngine } from '$lib/audio/soundEngine';

	let { isOpen = false, onClose = () => {} } = $props<{ isOpen?: boolean; onClose?: () => void }>();

	let downloaded = $state(false);

	function handleDownload() {
		downloaded = true;
		soundEngine.playClick();
		// Trigger file download
		const element = document.createElement('a');
		const file = new Blob([
			`Jay - Fullstack Software Engineer
Location: Cirebon, Jawa Barat, Indonesia
Focus: Scalable Backend, Event-Driven Architecture & Modern Web Applications

SUMMARY:
Over 25,400+ engineering hours architecting high-throughput distributed systems, event-driven pipelines with Kafka & RabbitMQ, microservices in Go & Node.js, and modern fullstack platforms with Laravel & Next.js.

CORE TECH STACK:
- Backend: Golang, Node.js, TypeScript, Laravel, PHP
- Databases: PostgreSQL, MySQL, Redis, Indexing & Concurrency
- Message Brokers: Apache Kafka, RabbitMQ
- Frontend: React.js, Next.js (SSR, App Router), Tailwind CSS
- DevOps & Infra: Docker, Containerization, Prometheus, Grafana, CI/CD Pipelines

SELECTED EXPERIENCE:
1. Lead Backend & Fullstack Architect | Jakarta & Remote (2022 - Present)
- Engineered event-driven transaction pipelines processing 18,000+ req/sec using Golang and Kafka.
- Deployed Dockerized microservices with end-to-end telemetry (Prometheus, Grafana).

2. Fullstack Software Engineer | Cirebon & Bandung (2018 - 2022)
- Built enterprise SaaS platforms with Laravel, PostgreSQL, and React.
- Implemented RabbitMQ async task queues reducing background processing time by 75%.`
		], { type: 'text/plain' });
		element.href = URL.createObjectURL(file);
		element.download = 'Jay_Fullstack_Engineer_CV.txt';
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
	}
</script>

{#if isOpen}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-all duration-300"
		role="dialog"
		aria-modal="true"
	>
		<div class="bg-[#141519] border border-white/15 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden text-neutral-200">
			<!-- Close Button -->
			<button
				type="button"
				class="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
				onclick={onClose}
				aria-label="Close CV preview"
			>
				<X size={18} />
			</button>

			<!-- Modal Header -->
			<div class="flex items-center gap-3 pb-6 border-b border-white/10">
				<div class="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white">
					<FileText size={24} />
				</div>
				<div>
					<h3 class="text-xl font-bold text-white tracking-tight">Jay</h3>
					<p class="text-xs text-neutral-400 font-medium">Curriculum Vitae &middot; Fullstack Software Engineer</p>
				</div>
			</div>

			<!-- CV Content Highlights -->
			<div class="py-5 space-y-4 text-sm max-h-[60vh] overflow-y-auto pr-2">
				<div class="space-y-1.5">
					<span class="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Experience Snapshot</span>
					<div class="p-3.5 rounded-xl bg-[#1b1d24] border border-white/5 space-y-2">
						<div class="flex justify-between items-center text-white font-semibold">
							<span class="flex items-center gap-1.5"><Building size={14} class="text-sky-400" /> Lead Backend & Fullstack Architect</span>
							<span class="text-xs font-mono text-neutral-400 flex items-center gap-1"><Calendar size={12} /> 2022 - Present</span>
						</div>
						<p class="text-xs text-neutral-400">Enterprise Tech Solutions &middot; Jakarta / Remote</p>
						<p class="text-xs text-neutral-300">Leading event-driven microservices with Golang & Kafka, PostgreSQL optimization, and Next.js platforms.</p>
					</div>

					<div class="p-3.5 rounded-xl bg-[#1b1d24] border border-white/5 space-y-2">
						<div class="flex justify-between items-center text-white font-semibold">
							<span class="flex items-center gap-1.5"><Building size={14} class="text-emerald-400" /> Fullstack Software Engineer</span>
							<span class="text-xs font-mono text-neutral-400 flex items-center gap-1"><Calendar size={12} /> 2018 - 2022</span>
						</div>
						<p class="text-xs text-neutral-400">Digital Innovation Labs &middot; Cirebon & Bandung</p>
						<p class="text-xs text-neutral-300">Developed enterprise multi-tenant systems using Laravel, MySQL, RabbitMQ task queues, and React frontends.</p>
					</div>
				</div>

				<div class="space-y-1.5">
					<span class="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Engineering Metrics</span>
					<div class="grid grid-cols-2 gap-2 text-center">
						<div class="p-3 rounded-xl bg-[#1b1d24] border border-white/5">
							<div class="text-xl font-bold text-white font-mono">25,467</div>
							<div class="text-[11px] text-neutral-400">Total Engineering Hours</div>
						</div>
						<div class="p-3 rounded-xl bg-[#1b1d24] border border-white/5">
							<div class="text-xl font-bold text-white font-mono">96 / 100</div>
							<div class="text-[11px] text-neutral-400">Backend Architecture Rating</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Modal Footer -->
			<div class="pt-5 border-t border-white/10 flex items-center justify-between">
				<span class="text-xs text-neutral-400 flex items-center gap-1">
					<MapPin size={13} /> Cirebon, Jawa Barat &middot; Indonesia
				</span>
				<button
					type="button"
					class="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors shadow-lg active:scale-95"
					onclick={handleDownload}
				>
					{#if downloaded}
						<CheckCircle2 size={16} class="text-emerald-600" />
						<span>Downloaded</span>
					{:else}
						<Download size={16} />
						<span>Download Full Resume</span>
					{/if}
				</button>
			</div>
		</div>
	</div>
{/if}
