<script>
	import Title from "../../lib/components/Title.svelte";
	import { rules, meta } from "$lib";
	import Link from "../../lib/components/Link.svelte";

	export let data;
</script>

<svelte:head>
	<title>{meta["houserules"].title}</title>
	<meta name="description" content={meta["houserules"].description} />
	<meta name="keywords" content={meta["houserules"].keywords} />
</svelte:head>

<div class="mt-36"></div>

<section>
	<Title
		h1={true}
		id="house-rules"
		tag="house rules"
		title="Guidelines for a Memorable Experience"
		subtitle="Please familiarize yourself with the camp's Rules before registering"
		backHref="/organizers"
		backText="Organizers"
		forwardHref="/"
		forwardText="Info"
	></Title>
</section>

<section>
	<img
		src="leavers_photo_5.jpg"
		alt="house rules illustration"
		class="mx-auto rounded-2xl shadow-2xl"
	/>
	<div>
		{#each rules as content}
			<h3 class="mt-14 text-xl font-bold">{content.name}</h3>
			<div class="rule mt-4">{@html content.html}</div>
		{/each}
	</div>
</section>

<section class="mt-24">
	<Title
		h1={false}
		id="further"
		tag="more leavers' camp"
		title="Check out these pages too!"
		subtitle="Just to make sure that you have the full picture of MSLC24 make sure that you have read these important pages below as well and have followed the camp on Instagram"
	></Title>
</section>

<section>
	<div class="flex flex-col items-center gap-4">
		{#if !data?.user}
			<Link href="/register" icon="" text="Register Now!" hot={true} />
		{/if}
		<Link href="/organizers" icon="mdi:user" text="Organizers" hot={false} />
		<Link
			href="https://www.instagram.com/milestoneleaverscamp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
			icon="mdi:instagram"
			text="@milestoneleaverscamp"
			hot={false}
		/>
	</div>
</section>

<style lang="postcss">
	:global(.rule p) {
		@apply mt-4;
	}
	:global(.rule li) {
		@apply mt-4;
	}
	:global(.rule ul) {
		@apply list-inside list-decimal lg:list-outside;
	}
</style>
