<script lang="ts">
	import { onMount } from 'svelte';
	import { Monitor } from '@lucide/svelte';

	let canvasRef: HTMLCanvasElement | null = $state(null);

	// Subtle glowing constellation particle animation
	onMount(() => {
		if (!canvasRef) return;
		const canvas = canvasRef;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		let animationFrameId: number;
		let width = (canvas.width = canvas.offsetWidth);
		let height = (canvas.height = canvas.offsetHeight);

		const particles: Array<{
			x: number;
			y: number;
			size: number;
			alpha: number;
			speed: number;
		}> = [];

		for (let i = 0; i < 35; i++) {
			particles.push({
				x: Math.random() * width,
				y: Math.random() * (height * 0.6), // upper portion of card
				size: Math.random() * 1.5 + 0.5,
				alpha: Math.random() * 0.7 + 0.2,
				speed: Math.random() * 0.015 + 0.005
			});
		}

		function draw() {
			ctx?.clearRect(0, 0, width, height);

			particles.forEach((p) => {
				p.alpha += p.speed;
				if (p.alpha > 0.9 || p.alpha < 0.2) p.speed = -p.speed;

				if (ctx) {
					ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, p.alpha)})`;
					ctx.beginPath();
					ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
					ctx.fill();
				}
			});

			animationFrameId = requestAnimationFrame(draw);
		}

		draw();

		return () => {
			cancelAnimationFrame(animationFrameId);
		};
	});
</script>

<div class="bento-card flex flex-col justify-between p-5 sm:p-6 min-h-90 xl:min-h-95 h-full relative overflow-hidden group select-none">
	<!-- Top Tag: 0 -> 1 -->
	<div class="relative z-20 flex items-center gap-2 text-neutral-400 text-xs font-mono font-medium tracking-wide">
		<Monitor size={15} class="text-neutral-400" />
		<span>0 → 1</span>
	</div>

	<!-- Canvas for star particles in the sky -->
	<canvas
		bind:this={canvasRef}
		class="absolute inset-0 w-full h-full pointer-events-none z-10"
	></canvas>

	<!-- Center Title -->
	<div class="relative z-20 my-auto text-center px-3 pt-2">
		<h2 class="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
			Fullstack Software<br />Engineer - Systems
		</h2>
		<p class="text-xs text-neutral-400 mt-1.5 font-medium tracking-wide max-w-xs mx-auto">
			Architecting event-driven microservices, high-throughput APIs, and reactive web applications.
		</p>
	</div>

	<!-- Bottom Skyline Graphic -->
	<div class="relative w-full h-36 xl:h-40 -mx-6 -mb-6 mt-auto overflow-hidden z-20 flex items-end">
		<!-- Skyline Image -->
		<img
			src="/images/skyline.jpg"
			alt="Illuminated city skyline at night"
			class="w-full h-full object-cover object-bottom filter brightness-110 contrast-115 group-hover:scale-105 transition-transform duration-700 ease-out"
		/>
		<!-- Seamless Top Gradient Mask -->
		<div class="absolute inset-0 bg-linear-to-t from-transparent via-[#141519]/70 to-[#141519] pointer-events-none"></div>
	</div>
</div>
