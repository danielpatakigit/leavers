<script>
	import Icon from "@iconify/svelte";
	import { dragscroll } from "@svelte-put/dragscroll";
	import { onMount } from "svelte";

	export let hasGap = false;
	export let coverPercentage = "";

	let slider;
	let currentSlidePosition = 0;

	$: nextDisabled = slider
		? currentSlidePosition >= slider.scrollWidth - slider.clientWidth
		: false;
	$: prevDisabled = currentSlidePosition <= 0;

	function slide(direction) {
		const moveAmount = slider.clientWidth * 0.3;
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

	onMount(() => {
		slider.addEventListener(
			"scroll",
			() => (currentSlidePosition = slider.scrollLeft),
		);
		window.addEventListener(
			"resize",
			() => (currentSlidePosition = slider.scrollLeft),
		);
	});
</script>

<div class="grid grid-cols-[auto,_1fr,auto]">
	<div class="slider-button-wrapper">
		<button
			on:click={() => slide("prev")}
			disabled={prevDisabled}
			class="slider-button w-min"
		>
			<Icon icon="mdi:chevron-left"></Icon>
		</button>
	</div>
	<div
		class="slider {hasGap ? 'gap-6' : ''}"
		style=""
		use:dragscroll
		bind:this={slider}
	>
		<slot />
	</div>
	<div class="slider-button-wrapper">
		<button
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
		/* Don't do it like this: */
		/* flex: 0 0 45%; */

		/* Instead specify it on the child element itself with tailwind classes: */
		/* <div class="flex-[0_0_45%]"> ... </div> */
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
		@apply mx-2  grid items-center;
	}

	.slider-button {
		@apply rounded-full border border-zinc-500 p-1 text-2xl text-zinc-600 transition-colors disabled:border-zinc-200 disabled:text-zinc-200;
	}
</style>
