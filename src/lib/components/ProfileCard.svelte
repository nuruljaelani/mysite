<script lang="ts">
	let cardRef: HTMLDivElement | null = $state(null);
	let tiltX = $state(0);
	let tiltY = $state(0);

	function handleMouseMove(e: MouseEvent) {
		if (!cardRef) return;
		const rect = cardRef.getBoundingClientRect();
		const x = e.clientX - rect.left - rect.width / 2;
		const y = e.clientY - rect.top - rect.height / 2;
		tiltX = (y / (rect.height / 2)) * -4;
		tiltY = (x / (rect.width / 2)) * 4;
	}

	function handleMouseLeave() {
		tiltX = 0;
		tiltY = 0;
	}
</script>

<div
	bind:this={cardRef}
	onmousemove={handleMouseMove}
	onmouseleave={handleMouseLeave}
	role="region"
	aria-label="Profile and statement"
	class="bento-card group flex flex-col justify-between p-7 sm:p-8 min-h-[480px] h-full relative overflow-hidden cursor-default"
	style="transform: perspective(1000px) rotateX({tiltX}deg) rotateY({tiltY}deg); transition: transform 0.15s ease-out;"
>
	<!-- Card Background Glow on Hover -->
	<div
		class="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
		style="background: radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.06), transparent 40%);"
	></div>

	<!-- Top Header Text -->
	<div class="relative z-10 space-y-1">
		<p class="text-sm font-medium text-neutral-400">I am</p>
		<h1 class="text-2xl sm:text-3xl font-bold text-white tracking-tight">Jay</h1>
	</div>

	<!-- Central Portrait Illustration -->
	<div class="relative z-10 flex-1 my-3 flex items-center justify-center overflow-hidden rounded-2xl">
		<div class="relative w-full h-full max-h-[300px] flex items-center justify-center">
			<img
				src="/images/jay.webp"
				alt="Portrait of Jay"
				class="w-full h-full object-cover object-center rounded-2xl filter contrast-105 brightness-95 group-hover:scale-[1.02] transition-transform duration-500 shadow-inner"
			/>
			<!-- Vignette Overlay to blend seamlessly -->
			<div class="absolute inset-0 rounded-2xl ring-1 ring-white/10 pointer-events-none bg-gradient-to-t from-[#141519]/90 via-transparent to-transparent"></div>
		</div>
	</div>

	<!-- Bottom Text Statement -->
	<div class="relative z-10 pt-2">
		<p class="text-base sm:text-lg font-medium text-white/90 leading-snug">
			I build scalable backend systems, event pipelines, and modern web apps from Cirebon, Indonesia!
		</p>
	</div>
</div>
