<script lang="ts">
	import { onMount } from 'svelte';
	import { Globe, ArrowUpRight } from '@lucide/svelte';
	import * as THREE from 'three';
	import { globePins } from '$lib/data/portfolioData';
	import type { GlobePin } from '$lib/types/portfolio';
	import { soundEngine } from '$lib/audio/soundEngine';

	let { onOpenCv = () => {} } = $props<{ onOpenCv?: () => void }>();

	let containerRef: HTMLDivElement | null = $state(null);
	let selectedPin = $state<GlobePin | null>(null);

	onMount(() => {
		if (!containerRef) return;

		const container = containerRef;
		const width = container.clientWidth;
		const height = container.clientHeight;

		// Scene, Camera, Renderer
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
		camera.position.z = 2.8;

		const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		renderer.setSize(width, height);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		container.appendChild(renderer.domElement);

		// Globe Group
		const globeGroup = new THREE.Group();
		scene.add(globeGroup);

		// 1. Dark tactile sphere base
		const globeRadius = 0.95;
		const sphereGeo = new THREE.SphereGeometry(globeRadius, 64, 64);
		const sphereMat = new THREE.MeshPhongMaterial({
			color: 0x111318,
			emissive: 0x050608,
			specular: 0x334155,
			shininess: 15
		});
		const globeMesh = new THREE.Mesh(sphereGeo, sphereMat);
		globeGroup.add(globeMesh);

		// 2. Continental dot cloud / points on sphere
		const pointCount = 3800;
		const positions = new Float32Array(pointCount * 3);
		const colors = new Float32Array(pointCount * 3);

		for (let i = 0; i < pointCount; i++) {
			const u = Math.random();
			const v = Math.random();
			const theta = u * 2.0 * Math.PI;
			const phi = Math.acos(2.0 * v - 1.0);
			const r = globeRadius + 0.005;

			const x = r * Math.sin(phi) * Math.cos(theta);
			const y = r * Math.cos(phi);
			const z = r * Math.sin(phi) * Math.sin(theta);

			positions[i * 3] = x;
			positions[i * 3 + 1] = y;
			positions[i * 3 + 2] = z;

			// Dot color: delicate slate with subtle variance
			colors[i * 3] = 0.28;
			colors[i * 3 + 1] = 0.32;
			colors[i * 3 + 2] = 0.38;
		}

		const pointsGeo = new THREE.BufferGeometry();
		pointsGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
		pointsGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

		const pointsMat = new THREE.PointsMaterial({
			size: 0.015,
			vertexColors: true,
			transparent: true,
			opacity: 0.55
		});
		const pointsMesh = new THREE.Points(pointsGeo, pointsMat);
		globeGroup.add(pointsMesh);

		// 3. Location Markers / Pins
		const pinObjects: Array<{ mesh: THREE.Mesh; pin: GlobePin }> = [];

		globePins.forEach((pin) => {
			// Convert lat/lng to 3D Cartesian coords
			const phi = (90 - pin.lat) * (Math.PI / 180);
			const theta = (pin.lng + 180) * (Math.PI / 180);
			const r = globeRadius + 0.02;

			const x = -(r * Math.sin(phi) * Math.cos(theta));
			const z = r * Math.sin(phi) * Math.sin(theta);
			const y = r * Math.cos(phi);

			// Pin dot
			const pinGeo = new THREE.SphereGeometry(0.032, 16, 16);
			const pinMat = new THREE.MeshBasicMaterial({
				color: 0x38bdf8,
				transparent: true,
				opacity: 0.95
			});
			const pinMesh = new THREE.Mesh(pinGeo, pinMat);
			pinMesh.position.set(x, y, z);
			globeGroup.add(pinMesh);

			// Pulsing glow ring around pin
			const ringGeo = new THREE.RingGeometry(0.04, 0.055, 32);
			const ringMat = new THREE.MeshBasicMaterial({
				color: 0x00f0ff,
				side: THREE.DoubleSide,
				transparent: true,
				opacity: 0.75
			});
			const ringMesh = new THREE.Mesh(ringGeo, ringMat);
			ringMesh.position.set(x, y, z);
			ringMesh.lookAt(x * 2, y * 2, z * 2);
			globeGroup.add(ringMesh);

			pinObjects.push({ mesh: pinMesh, pin });
		});

		// 4. Lighting & Ambient atmosphere
		const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
		scene.add(ambientLight);

		const dirLight = new THREE.DirectionalLight(0x7dd3fc, 1.4);
		dirLight.position.set(5, 3, 5);
		scene.add(dirLight);

		// Rotate globe to face Indonesia / Southeast Asia initially
		globeGroup.rotation.y = -1.6;
		globeGroup.rotation.x = 0.1;

		// Interactive drag / inertia
		let isDragging = false;
		let prevMouseX = 0;
		let prevMouseY = 0;
		let velX = 0.0025; // idle auto-rotation
		let velY = 0;

		const handleMouseDown = (e: MouseEvent) => {
			isDragging = true;
			prevMouseX = e.clientX;
			prevMouseY = e.clientY;
		};

		const handleMouseMove = (e: MouseEvent) => {
			if (!isDragging) return;
			const deltaX = e.clientX - prevMouseX;
			const deltaY = e.clientY - prevMouseY;
			velX = deltaX * 0.004;
			velY = deltaY * 0.004;
			globeGroup.rotation.y += velX;
			globeGroup.rotation.x += velY;
			prevMouseX = e.clientX;
			prevMouseY = e.clientY;
		};

		const handleMouseUp = () => {
			isDragging = false;
		};

		const dom = renderer.domElement;
		dom.addEventListener('mousedown', handleMouseDown);
		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('mouseup', handleMouseUp);

		// Raycasting for pin clicks
		const raycaster = new THREE.Raycaster();
		const mouse = new THREE.Vector2();

		const handleClick = (e: MouseEvent) => {
			const rect = dom.getBoundingClientRect();
			mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
			mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

			raycaster.setFromCamera(mouse, camera);
			const intersects = raycaster.intersectObjects(pinObjects.map((p) => p.mesh));

			if (intersects.length > 0) {
				const hit = pinObjects.find((p) => p.mesh === intersects[0].object);
				if (hit) {
					selectedPin = hit.pin;
					soundEngine.playClick();
				}
			}
		};

		dom.addEventListener('click', handleClick);

		// Resize observer
		const resizeObserver = new ResizeObserver(() => {
			if (!container) return;
			const newWidth = container.clientWidth;
			const newHeight = container.clientHeight;
			camera.aspect = newWidth / newHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(newWidth, newHeight);
		});
		resizeObserver.observe(container);

		// Animation Loop
		let animId: number;
		const animate = () => {
			if (!isDragging) {
				globeGroup.rotation.y += velX;
				globeGroup.rotation.x += velY;
				// Damping
				velX = THREE.MathUtils.lerp(velX, 0.002, 0.05);
				velY = THREE.MathUtils.lerp(velY, 0, 0.05);
			}

			renderer.render(scene, camera);
			animId = requestAnimationFrame(animate);
		};

		animate();

		return () => {
			cancelAnimationFrame(animId);
			resizeObserver.disconnect();
			dom.removeEventListener('mousedown', handleMouseDown);
			dom.removeEventListener('click', handleClick);
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('mouseup', handleMouseUp);
			renderer.dispose();
			if (container.contains(dom)) {
				container.removeChild(dom);
			}
		};
	});
</script>

<div class="bento-card flex flex-col justify-between p-5 sm:p-6 min-h-90 xl:min-h-95 h-full relative overflow-hidden group select-none">
	<!-- Top Bar -->
	<div class="flex items-center justify-between z-20">
		<div class="flex items-center gap-2 text-neutral-400 text-xs font-semibold tracking-wider uppercase">
			<Globe size={15} class="text-neutral-400" />
			<span>MY EXPERIENCE</span>
		</div>

		<!-- Download CV Button -->
		<a
			href="https://drive.google.com/file/d/1bXXZNGT9Y5sofS262XzA4o3Q-VMG4eFL/view?usp=sharing"
			target="_blank"
			rel="noopener noreferrer"
			class="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-xs font-medium text-white transition-all duration-200 shadow-sm active:scale-95"
		>
			<span>Download CV</span>
			<ArrowUpRight size={13} class="text-neutral-300" />
		</a>
	</div>

	<!-- 3D Globe Container -->
	<div class="relative w-full h-56 xl:h-64 flex items-center justify-center cursor-grab active:cursor-grabbing my-auto">
		<div bind:this={containerRef} class="w-full h-full"></div>

		<!-- Atmospheric Blue Outer Glow -->
		<div class="absolute inset-0 pointer-events-none rounded-full filter blur-2xl opacity-20 bg-sky-500/30 scale-75"></div>

		<!-- Interactive Pin Detail Tooltip Overlay -->
		{#if selectedPin}
			<div
				class="absolute bottom-2 left-2 right-2 bg-[#17181e]/95 backdrop-blur-md border border-white/15 p-3 rounded-lg shadow-2xl z-30 transition-all duration-300"
			>
				<div class="flex items-center justify-between">
					<div class="flex items-center gap-2">
						<span class="w-2 h-2 rounded-full bg-sky-400 animate-ping"></span>
						<h4 class="text-xs sm:text-sm font-bold text-white">{selectedPin.city}, {selectedPin.country}</h4>
					</div>
					<span class="text-[10px] sm:text-[11px] font-mono text-sky-400 font-semibold">{selectedPin.years}</span>
				</div>
				<p class="text-xs text-neutral-300 font-medium mt-1">{selectedPin.role} &middot; <span class="text-neutral-400">{selectedPin.company}</span></p>
				<p class="text-[11px] text-neutral-400 mt-1 leading-normal">{selectedPin.description}</p>
				<button
					type="button"
					class="mt-2 text-[10px] text-neutral-500 hover:text-neutral-300 uppercase tracking-wider underline"
					onclick={() => (selectedPin = null)}
				>
					Close
				</button>
			</div>
		{/if}
	</div>

	<!-- Bottom Subtext / Helper -->
	<div class="flex items-center justify-between text-[11px] text-neutral-500 z-20">
		<span>Drag to explore global roles</span>
		<div class="flex items-center gap-1">
			<span class="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
			<span>Interactive pins</span>
		</div>
	</div>
</div>
