<script>
	export let content;
</script>

<div {...$$restProps}>
	<div
		class="flex flex-col border border-gold-900 bg-gold-100 px-6 pb-10 pt-6 md:px-14 md:pb-16 md:pt-12"
	>
		<div
			class="flex flex-col gap-2 text-sm italic leading-relaxed tracking-wide"
		>
			{@html content.html}
		</div>
		<span class="mt-8 font-bold">{content.name}</span>
		<span class="">{content.tag}</span>
	</div>
</div>

<style lang="postcss">
</style>
