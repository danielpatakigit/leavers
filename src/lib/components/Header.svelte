<script>
	import Link from "./Link.svelte";
	export let data;

	// when data changes update the header
</script>

<header class="fixed top-0 z-50 flex w-full justify-center">
	<div
		class=" gap flex w-[min(100%,_50rem)] items-center justify-between bg-white px-1 shadow-xl md:mx-4 md:mt-2 md:rounded-xl md:px-4"
	>
		<a href="/" class="flex items-center gap-1">
			<div class="w-16">
				<img src="/ms laika.png" alt="ms laika" />
			</div>
			<div class="flex flex-col">
				{#key data?.user}
					<span class="-mb-1 font-serif font-bold">
						{#if data?.user}
							Leavers' Camp
						{:else}
							Milestone
						{/if}
					</span>
					<span class="text-sm">
						{#if data?.user?.name}
							<span class="font-light italic">Using as:</span>
							<br class="md:hidden" />
							<span class="font-bold text-gold-900">{data?.user?.name}</span>
						{:else}
							<span>Leavers' Camp</span>
						{/if}
					</span>
				{/key}
			</div>
		</a>
		<div class="flex items-center gap-4">
			{#key data?.user}
				{#if data?.user}
					<Link
						href="/myregistration"
						icon="solar:paperclip-linear"
						text="My Registration"
						hot={true}
					/>
				{:else}
					<!-- <Link href="/" icon="" text="Home" hot={false} /> -->
					<Link href="/login" icon="" text="Login" hot={false} />
					<!-- <Link href="/register" icon="" text="Register" hot={true} /> -->
				{/if}
			{/key}
		</div>
	</div>
</header>

<style lang="postcss">
	header {
		view-transition-name: header;
	}
</style>
