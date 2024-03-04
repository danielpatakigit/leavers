<script>
	import Title from "../../lib/components/Title.svelte";
	import { rules } from "$lib";
</script>

<div class="mt-36"></div>
<section class="">
	<Title
		h1={true}
		id="house-rules"
		tag="house rules"
		title="Guidelines for a Memorable Experience"
		subtitle="Please familiarize yourself with the camp's Rules before registering"
		backHref="/organizers"
		backText="Organizers"
		forwardHref="/register"
		forwardText="Register"
	></Title>
</section>
<section class="">
	<div class="">
		{#each rules as content}
			<h3 class="mt-14 text-xl font-bold">{content.name}</h3>
			<div class="rule mt-4">{@html content.html}</div>
		{/each}
	</div>
</section>

<style lang="postcss">
	:global(.rule p) {
		@apply mt-4;
	}
	:global(.rule li) {
		@apply mt-4;
	}
</style>
