<script>
	import Link from "./Link.svelte";
</script>

<header class="fixed top-0 z-50 flex w-full justify-center">
	<div
		class=" gap mx-4 mt-4 flex w-[min(100%,_40rem)] items-center justify-between rounded-xl border border-zinc-100 bg-white px-4 shadow-lg"
	>
		<a
			href="/"
			class="flex items-center gap-1"
		>
			<div class="w-16">
				<img
					src="/ms laika.png"
					alt="ms laika"
				/>
			</div>
			<div class="flex flex-col">
				<span class="-mb-1 font-serif font-bold">Milestone</span>
				<span class="">Leavers' Camp</span>
			</div>
		</a>
		<div class="flex items-center gap-4">
			<Link
				href="/"
				icon=""
				text="Home"
				hot={false}
			/>
			<Link
				href="/register"
				icon=""
				text="Register"
				hot={true}
			/>
		</div>
	</div>
</header>
