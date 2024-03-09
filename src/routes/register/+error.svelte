<script>
	import { page } from "$app/stores";
</script>

<section>
	<h1 class="text-balance text-2xl font-bold">
		{$page.status}: {$page.error.message}
	</h1>
</section>
