<script>
	import Title from "../../lib/components/Title.svelte";
	import { rules } from "$lib";
	import Link from "../../lib/components/Link.svelte";
</script>

<div class="mt-36"></div>
<section class="">
	<Title
		h1={true}
		id="house-rules"
		tag="house rules"
		title="Guidelines for a Memorable Experience"
		subtitle="Please familiarize yourself with the camp's Rules before registering"
		backHref="/organizers"
		backText="Organizers"
		forwardHref="/register"
		forwardText="Register"
	></Title>
</section>
<section class="">
	<div class="">
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
		<Link
			href="/register"
			icon=""
			text="Register Now!"
			hot={true}
		/>
		<Link
			href="/organizers"
			icon="mdi:user"
			text="Organizers"
			hot={false}
		/>
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
		@apply list-outside list-decimal;
	}
</style>
