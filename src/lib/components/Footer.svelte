<script>
	import Icon from "@iconify/svelte";
	export let data;
</script>

<footer class="mb-8 mt-12 flex flex-col items-center justify-center">
	<div
		class=" gap mx-2 mt-4 flex w-[min(100%,_40rem)] items-center justify-between border-t-2 border-zinc-100 px-0 pt-2 md:mx-4 md:px-4"
	>
		<a href="/" class="flex items-center gap-1">
			<div class="">
				<img src="/ms logo horizontal.svg" alt="ms laika" />
			</div>
		</a>
		<div class="flex items-center gap-4 text-2xl">
			<a
				href="https://milestone-institute.org/hu/milestone-intezet-adatkezeles/"
				target="_blank"
				class="text-sm"
			>
				Privacy Policy
			</a>
			<a
				href="https://www.instagram.com/milestoneleaverscamp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
				target="_blank"
			>
				<Icon icon="mdi:instagram"></Icon>
			</a>
		</div>
	</div>
	{#if data?.user?.name}
		<form action="/logout" method="post" class="mt-4">
			<button class="hot-link-style-button" type="submit">
				<Icon icon="solar:logout-outline"></Icon>
				Logout
			</button>
		</form>
	{/if}
</footer>

<style lang="postcss">
	.hot-link-style-button {
		@apply flex items-center gap-1 rounded-lg bg-gold-900 px-4 py-1 text-center text-lg font-bold text-white shadow-md hover:bg-gold-800;
	}
</style>
