<script>
	import Icon from "@iconify/svelte";
	import { dragscroll } from "@svelte-put/dragscroll";
	import { onMount } from "svelte";

	export let hasGap = false;

	let slider;
	let currentSlidePosition = 0;

	let nextDisabled;
	let prevDisabled;

	$: {
		nextDisabled =
			!slider ||
			currentSlidePosition >= slider.scrollWidth - slider.clientWidth;
		prevDisabled = currentSlidePosition <= 0;
	}

	onMount(() => {
		if (slider) {
			slider.addEventListener("scroll", updateSlidePosition);
			// Ensure slider starts at left side when mounted
			slider.scrollTo({ left: 0, behavior: "auto" });
		}
	});

	function updateSlidePosition() {
		currentSlidePosition = slider.scrollLeft;
	}

	function slide(direction) {
		const moveAmount = slider.clientWidth * 0.3; // Use slider's client width
		if (
			direction === "next" &&
			currentSlidePosition < slider.scrollWidth - slider.clientWidth
		) {
			currentSlidePosition += moveAmount;
		} else if (direction === "prev" && currentSlidePosition > 0) {
			currentSlidePosition -= moveAmount;
		}

		slider.scrollTo({
			left: currentSlidePosition,
			behavior: "smooth",
		});
	}
</script>

<div class="grid grid-cols-1 md:grid-cols-[auto,_1fr,auto]">
	<div class="slider-button-wrapper">
		<button
			type="button"
			on:click={() => slide("prev")}
			disabled={prevDisabled}
			class="slider-button w-min"
		>
			<Icon icon="mdi:chevron-left"></Icon>
		</button>
	</div>
	<div
		class="slider {hasGap ? 'gap-6' : ''} "
		use:dragscroll
		bind:this={slider}
	>
		<slot />
	</div>
	<div class="slider-button-wrapper">
		<button
			type="button"
			on:click={() => slide("next")}
			disabled={nextDisabled}
			class="slider-button w-min"
		>
			<Icon icon="mdi:chevron-right"></Icon>
		</button>
	</div>
</div>

<style lang="postcss">
	.slider {
		display: flex;
		flex-wrap: nowrap;
		overflow: scroll;
		padding-bottom: 1rem;
		scroll-snap-type: x mandatory;
		scroll-behavior: smooth;
	}

	:global(.slider > *) {
		scroll-snap-align: center;
	}

	.slider::-webkit-scrollbar {
		height: 6px;
	}
	.slider::-webkit-scrollbar-thumb {
		border-radius: 5px;
		@apply bg-gold-800;
	}

	.slider-button-wrapper {
		@apply mx-2 hidden items-center md:grid;
	}

	.slider-button {
		@apply rounded-full border border-zinc-500 p-1 text-2xl text-zinc-600 transition-colors disabled:border-zinc-200 disabled:text-zinc-200;
	}
</style>
