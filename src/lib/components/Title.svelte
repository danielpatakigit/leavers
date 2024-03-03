<script>
	export let h1 = false;
	export let id = "lorem-ipsum";
	export let title = "Lorem ipsum dolor sit amet consectetur";
	export let subtitle =
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorum dolores ipsum dolore deleniti natus voluptatum blanditiis iure!";
	export let tag = "Lorem ipsum";
</script>

<div class="flex flex-col items-center text-center">
	{#if h1}
		<h1
			{id}
			class="tag"
		>
			{tag}
		</h1>
	{:else}
		<h2
			{id}
			class="tag"
		>
			{tag}
		</h2>
	{/if}
	<h3 class="mt-4 text-balance font-sans text-3xl font-bold">
		{title}
	</h3>
	<p class="mt-2 text-balance text-lg">{subtitle}</p>
</div>

<style lang="postcss">
	.tag {
		@apply font-serif font-bold  uppercase tracking-widest text-gold-900;
	}
</style>
