<script>
	export let content;
</script>

<div class=" flex flex-col border p-8">
	<span class="font-bold">{content.question}</span>
	<div
		class="content mt-4 flex flex-col gap-2 leading-relaxed tracking-wide"
	>
		{@html content.html}
	</div>
</div>

<style>
</style>
