<script>
	import Icon from "@iconify/svelte";

	export let href = "/";
	export let icon;
	export let text = "Lorem ipsum";
	export let hot = true;
</script>

<a
	{href}
	class="{hot
		? 'bg-gold-900 text-white hover:bg-gold-800'
		: 'border border-gold-900 bg-white text-gold-900 hover:bg-gold-800 hover:text-white'} flex items-center gap-1 rounded-lg px-4 py-1 text-center text-lg font-bold shadow-md"
>
	{#if icon}
		<Icon {icon}></Icon>
	{/if}

	<span class="">{text}</span>
</a>

<style lang="postcss">
	a {
		@apply transition-colors;
	}
</style>
