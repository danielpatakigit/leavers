<script>
	export let content;
</script>

<div class="flex flex-col border pb-2 shadow-lg">
	<img
		src="/{content.img}"
		alt={content.img}
		class="aspect-[9_/_14] object-cover"
	/>
	<div class="flex flex-col px-3">
		<span class="mt-4 text-xl font-bold">{content.name}</span>
		<span class="">{content.tag}</span>
	</div>
</div>
