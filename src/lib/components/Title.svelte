<script>
	import Icon from "@iconify/svelte";

	export let h1 = false;
	export let id = "lorem-ipsum";
	export let title = "Lorem ipsum dolor sit amet consectetur";
	export let subtitle =
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorum dolores ipsum dolore deleniti natus voluptatum blanditiis iure!";
	export let tag = "Lorem ipsum";

	export let backHref = null;
	export let backText = null;
	export let forwardHref = null;
	export let forwardText = null;
</script>

<div class="flex flex-col items-center text-center">
	<div class="relative flex w-full justify-center">
		{#if backHref && backText}
			<a href={backHref} class="nav-link left-0">
				<Icon icon="mdi:arrow-left"></Icon>
				<span class="">{backText}</span>
			</a>
		{/if}
		{#if h1}
			<h1 {id} class="tag">
				{tag}
			</h1>
		{:else}
			<h2 {id} class="tag">
				{tag}
			</h2>
		{/if}
		{#if forwardHref && forwardText}
			<a href={forwardHref} class="nav-link right-0">
				<span class="">{forwardText}</span>
				<Icon icon="mdi:arrow-right"></Icon>
			</a>
		{/if}
	</div>
	<h3 class="mt-4 text-balance font-sans text-3xl font-bold">{title}</h3>
	<p class="mt-2 text-balance text-base md:text-lg">{subtitle}</p>
</div>

<style lang="postcss">
	.tag {
		@apply font-serif font-bold uppercase tracking-widest text-gold-900;
	}

	.nav-link {
		@apply absolute hidden items-center gap-4 font-bold text-gold-900 md:flex;
	}
</style>
