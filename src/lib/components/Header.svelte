<script>
	import Link from "./Link.svelte";
	export let data;
</script>

<header class="fixed top-0 z-50 flex w-full justify-center">
	<div
		class=" gap flex w-[min(100%,_50rem)] items-center justify-between border border-zinc-100 bg-white px-4 shadow-xl md:mx-4 md:mt-2 md:rounded-xl"
	>
		<a href="/" class="flex items-center gap-1">
			<div class="w-16">
				<img src="/ms laika.png" alt="ms laika" />
			</div>
			<div class="flex flex-col">
				<span class="-mb-1 font-serif font-bold">Milestone</span>
				<span class="text-sm">
					{#if data?.user?.name}
						<span class="font-light italic">Using as:</span>
						<span class="font-bold text-gold-900">{data?.user?.name}</span>
					{:else}
						<span>Leavers' Camp</span>
					{/if}
				</span>
			</div>
		</a>
		<div class="flex items-center gap-4">
			{#if data?.user}
				<Link
					href="/myregistration"
					icon="solar:paperclip-linear"
					text="My Registration"
					hot={false}
				/>
				<form action="/logout" method="post">
					<button class="hot-link-style-button" type="submit">Logout</button>
				</form>
			{:else}
				<!-- <Link href="/" icon="" text="Home" hot={false} /> -->
				<Link href="/login" icon="" text="Login" hot={false} />
				<Link href="/register" icon="" text="Register" hot={true} />
			{/if}
		</div>
	</div>
</header>

<style lang="postcss">
	.hot-link-style-button {
		@apply flex items-center gap-1 rounded-lg bg-gold-900 px-4 py-1 text-center text-lg font-bold text-white shadow-md hover:bg-gold-800;
	}

	header {
		view-transition-name: header;
	}
</style>
