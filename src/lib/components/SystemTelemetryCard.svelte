<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { Activity, Zap, ArrowUpRight, Cpu, Layers, ShieldCheck, CheckCircle2, AlertTriangle } from '@lucide/svelte';
	import { soundEngine } from '$lib/audio/soundEngine';

	let { onOpenArchitecture = () => {} } = $props<{
		onOpenArchitecture?: () => void;
	}>();

	// Telemetry State
	let isSpikeActive = $state(false);
	let spikeTimer: number | null = null;
	let spikeRemainingSeconds = $state(0);

	// Dynamic metrics
	let currentThroughput = $state(18420);
	let currentLatency = $state(6.4);
	let currentNetworkIO = $state(1.42);
	let activeWorkers = $state(16);
	let queueLag = $state(0);

	// Historical sparkline data points (normalized 0 to 100)
	let sparklinePoints = $state<number[]>([
		28, 32, 30, 35, 34, 38, 42, 40, 36, 44, 42, 48, 45, 43, 50, 47, 49, 46, 52, 50, 48, 51, 49, 53
	]);

	// Generate SVG smooth path from points
	let svgPath = $derived.by(() => {
		const width = 360;
		const height = 64;
		const n = sparklinePoints.length;
		if (n === 0) return { path: '', area: '' };

		const step = width / (n - 1);
		const coords = sparklinePoints.map((val, idx) => {
			const x = idx * step;
			// Invert Y: 100 val is top (y=4), 0 val is bottom (y=60)
			const y = height - (val / 100) * (height - 12) - 6;
			return { x, y };
		});

		// Create smooth cubic bezier or line
		let path = `M ${coords[0].x.toFixed(1)},${coords[0].y.toFixed(1)}`;
		for (let i = 1; i < coords.length; i++) {
			const prev = coords[i - 1];
			const curr = coords[i];
			const cpx1 = prev.x + (curr.x - prev.x) / 2;
			const cpy1 = prev.y;
			const cpx2 = prev.x + (curr.x - prev.x) / 2;
			const cpy2 = curr.y;
			path += ` C ${cpx1.toFixed(1)},${cpy1.toFixed(1)} ${cpx2.toFixed(1)},${cpy2.toFixed(1)} ${curr.x.toFixed(1)},${curr.y.toFixed(1)}`;
		}

		// Area path closed to bottom
		const area = `${path} L ${width},${height} L 0,${height} Z`;

		return { path, area };
	});

	// Periodic telemetry pulse
	let intervalId: number | null = null;

	onMount(() => {
		intervalId = window.setInterval(() => {
			if (isSpikeActive) {
				// High load metrics
				const targetThroughput = 48500 + Math.floor((Math.random() - 0.5) * 4200);
				currentThroughput = Math.round(currentThroughput * 0.7 + targetThroughput * 0.3);
				currentLatency = +(12.4 + (Math.random() * 2.8)).toFixed(1);
				currentNetworkIO = +(3.85 + (Math.random() * 0.4)).toFixed(2);
				queueLag = Math.floor(Math.random() * 12);

				// Higher sparkline values
				const nextVal = Math.min(96, Math.max(78, 85 + (Math.random() - 0.5) * 18));
				sparklinePoints = [...sparklinePoints.slice(1), Math.round(nextVal)];
			} else {
				// Nominal baseline metrics
				const targetThroughput = 18450 + Math.floor((Math.random() - 0.5) * 650);
				currentThroughput = Math.round(currentThroughput * 0.8 + targetThroughput * 0.2);
				currentLatency = +(6.2 + (Math.random() * 0.6)).toFixed(1);
				currentNetworkIO = +(1.42 + (Math.random() * 0.08)).toFixed(2);
				queueLag = 0;

				// Baseline sparkline values
				const nextVal = Math.min(62, Math.max(30, 46 + (Math.random() - 0.5) * 12));
				sparklinePoints = [...sparklinePoints.slice(1), Math.round(nextVal)];
			}
		}, 450);

		return () => {
			if (intervalId !== null) clearInterval(intervalId);
			if (spikeTimer !== null) clearInterval(spikeTimer);
		};
	});

	onDestroy(() => {
		if (intervalId !== null) clearInterval(intervalId);
		if (spikeTimer !== null) clearInterval(spikeTimer);
	});

	function triggerTrafficSpike() {
		soundEngine.playClick();

		if (isSpikeActive) {
			// Cancel early
			isSpikeActive = false;
			spikeRemainingSeconds = 0;
			if (spikeTimer !== null) {
				clearInterval(spikeTimer);
				spikeTimer = null;
			}
			return;
		}

		isSpikeActive = true;
		spikeRemainingSeconds = 6;

		if (spikeTimer !== null) clearInterval(spikeTimer);
		spikeTimer = window.setInterval(() => {
			spikeRemainingSeconds--;
			if (spikeRemainingSeconds <= 0) {
				isSpikeActive = false;
				if (spikeTimer !== null) {
					clearInterval(spikeTimer);
					spikeTimer = null;
				}
			}
		}, 1000);
	}

	function handleInspectArchitecture() {
		soundEngine.playClick();
		onOpenArchitecture();
	}
</script>

<div class="bento-card flex flex-col justify-between p-5 sm:p-6 min-h-90 xl:min-h-95 h-full relative overflow-hidden group select-none">
	<!-- Ambient glow backdrop depending on load -->
	<div
		class="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl pointer-events-none transition-all duration-700 {isSpikeActive
			? 'bg-amber-500/15'
			: 'bg-emerald-500/10'}"
	></div>

	<!-- Top Header: Title & Live Cluster SLA Badge -->
	<div class="flex items-center justify-between gap-3 relative z-10">
		<div class="flex items-center gap-2 text-neutral-400 text-xs font-semibold tracking-wider uppercase">
			<Activity size={15} class={isSpikeActive ? 'text-amber-400 animate-pulse' : 'text-emerald-400'} />
			<span>SYSTEM TELEMETRY</span>
		</div>

		<!-- Status Badge -->
		<div
			class="flex items-center gap-2 px-2.5 py-0.5 rounded-full border text-[11px] font-mono tracking-tight transition-colors duration-300 {isSpikeActive
				? 'bg-amber-500/10 border-amber-500/30 text-amber-300'
				: 'bg-emerald-500/10 border-emerald-500/25 text-emerald-400'}"
		>
			<span
				class="w-1.5 h-1.5 rounded-full {isSpikeActive
					? 'bg-amber-400 animate-ping'
					: 'bg-emerald-400 animate-pulse'}"
			></span>
			<span>{isSpikeActive ? `STRESS SPIKE (${spikeRemainingSeconds}s)` : 'CLUSTER 99.98% SLA'}</span>
		</div>
	</div>

	<!-- Central Architecture Pipeline Monitor -->
	<div class="my-auto w-full max-w-sm mx-auto bg-[#181a20] border border-white/10 rounded-2xl p-4 sm:p-4.5 shadow-2xl relative overflow-hidden space-y-2.5">
		<!-- Partition & Cluster Meta -->
		<div class="flex items-center justify-between pb-2 border-b border-white/5">
			<div class="flex items-center gap-2">
				<Cpu size={14} class="text-[#00c7be]" />
				<span class="text-[11px] font-mono tracking-wider text-neutral-300 uppercase font-semibold">
					Kafka Topic: <span class="text-white">tx.events</span>
				</span>
			</div>
			<span class="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
				Partitions: 12
			</span>
		</div>

		<!-- Primary Metric: Real-Time Ingestion Throughput -->
		<div class="flex items-baseline justify-between gap-2">
			<div>
				<div class="flex items-baseline gap-1.5">
					<span class="text-xl sm:text-2xl font-extrabold font-mono text-white tracking-tight tabular-nums transition-colors duration-200">
						{currentThroughput.toLocaleString()}
					</span>
					<span class="text-xs font-semibold text-neutral-400 font-mono">msg/sec</span>
				</div>
				<p class="text-[10px] sm:text-[11px] text-neutral-400 font-medium">Ingestion Rate Throughput</p>
			</div>

			<div class="text-right">
				<span
					class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-bold {isSpikeActive
						? 'bg-amber-500/20 text-amber-300'
						: 'bg-emerald-500/15 text-emerald-400'}"
				>
					{isSpikeActive ? '▲ +260%' : '● NOMINAL'}
				</span>
			</div>
		</div>

		<!-- Dynamic SVG Sparkline Graph -->
		<div class="w-full h-12 sm:h-13 bg-[#101115] border border-white/5 rounded-xl relative overflow-hidden flex items-end">
			<svg
				class="w-full h-full overflow-visible"
				viewBox="0 0 360 64"
				preserveAspectRatio="none"
				aria-hidden="true"
			>
				<defs>
					<linearGradient id="telemetryGrad" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" stop-color={isSpikeActive ? '#f59e0b' : '#00c7be'} stop-opacity="0.38" />
						<stop offset="100%" stop-color={isSpikeActive ? '#f59e0b' : '#00c7be'} stop-opacity="0.0" />
					</linearGradient>
				</defs>

				<!-- Subtle background grid lines -->
				<line x1="0" y1="16" x2="360" y2="16" stroke="rgba(255,255,255,0.05)" stroke-dasharray="3 3" />
				<line x1="0" y1="36" x2="360" y2="36" stroke="rgba(255,255,255,0.05)" stroke-dasharray="3 3" />
				<line x1="0" y1="52" x2="360" y2="52" stroke="rgba(255,255,255,0.05)" stroke-dasharray="3 3" />

				<!-- Area under curve -->
				<path d={svgPath.area} fill="url(#telemetryGrad)" />

				<!-- Line Stroke -->
				<path
					d={svgPath.path}
					fill="none"
					stroke={isSpikeActive ? '#fbbf24' : '#00c7be'}
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="transition-all duration-300"
				/>
			</svg>
		</div>

		<!-- Secondary 4-Cell Telemetry Matrix -->
		<div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 pt-0.5">
			<div class="p-1.5 sm:p-2 rounded-lg bg-white/3 border border-white/5">
				<p class="text-[9px] sm:text-[10px] text-neutral-500 font-mono uppercase">p99 Latency</p>
				<p class="text-xs font-mono font-bold text-neutral-200 tabular-nums">
					{currentLatency}ms
				</p>
			</div>

			<div class="p-1.5 sm:p-2 rounded-lg bg-white/3 border border-white/5">
				<p class="text-[9px] sm:text-[10px] text-neutral-500 font-mono uppercase">Go Workers</p>
				<p class="text-xs font-mono font-bold text-neutral-200 tabular-nums">
					{activeWorkers}/{activeWorkers}
				</p>
			</div>

			<div class="p-1.5 sm:p-2 rounded-lg bg-white/3 border border-white/5">
				<p class="text-[9px] sm:text-[10px] text-neutral-500 font-mono uppercase">Queue Lag</p>
				<p class="text-xs font-mono font-bold {queueLag > 0 ? 'text-amber-400' : 'text-emerald-400'} tabular-nums">
					{queueLag} msgs
				</p>
			</div>

			<div class="p-1.5 sm:p-2 rounded-lg bg-white/3 border border-white/5">
				<p class="text-[9px] sm:text-[10px] text-neutral-500 font-mono uppercase">Net I/O</p>
				<p class="text-xs font-mono font-bold text-neutral-200 tabular-nums">
					{currentNetworkIO} GB/s
				</p>
			</div>
		</div>

		<!-- Action Controls -->
		<div class="flex items-center gap-2 pt-1">
			<!-- Traffic Spike Simulator Button -->
			<button
				type="button"
				class="flex-1 py-1.5 px-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-200 border cursor-pointer active:scale-98 {isSpikeActive
					? 'bg-amber-500 hover:bg-amber-400 text-black border-amber-400 shadow-lg shadow-amber-500/25'
					: 'bg-white/10 hover:bg-white/15 text-white border-white/10'}"
				onclick={triggerTrafficSpike}
				title={isSpikeActive ? 'Stop Traffic Spike' : 'Simulate Traffic Spike (High Load)'}
			>
				<Zap size={13} class={isSpikeActive ? 'fill-black text-black animate-bounce' : 'text-amber-400'} />
				<span>{isSpikeActive ? 'Stop Spike' : 'Simulate Spike'}</span>
			</button>

			<!-- Inspect Architecture Case Study Button -->
			<button
				type="button"
				class="py-1.5 px-2.5 rounded-xl text-xs font-semibold bg-[#101115] hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 flex items-center gap-1 transition-all duration-200 cursor-pointer active:scale-98"
				onclick={handleInspectArchitecture}
				title="View Event-Driven Architecture Case Study"
			>
				<span>Architecture</span>
				<ArrowUpRight size={13} class="text-neutral-400 group-hover:text-white" />
			</button>
		</div>
	</div>

	<!-- Bottom Subtitle / Architecture Note -->
	<div class="text-center relative z-10">
		<p class="text-xs text-neutral-500 font-medium">
			Distributed event streaming with Golang, Kafka partitions, and Prometheus telemetry.
		</p>
	</div>
</div>
