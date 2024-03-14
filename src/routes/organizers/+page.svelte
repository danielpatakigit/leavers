<script>
	import Title from "../../lib/components/Title.svelte";
	import { organizers } from "$lib";
	import OrganizerCard from "../../lib/components/OrganizerCard.svelte";
	import Link from "../../lib/components/Link.svelte";
	import { fade, fly, slide } from "svelte/transition";
	import { elasticIn, quintOut } from "svelte/easing";

	export let data;
</script>

<div class="mt-36"></div>
<section class="">
	<Title
		h1={true}
		id="organizers"
		tag="THE ORGANIZING TEAM"
		title="Meet Our Dedicated Organizers"
		subtitle="Passionate Milestone Alumni Leading the Way"
		backHref="/"
		backText="Home"
		forwardHref="/houserules"
		forwardText="House Rules"
	></Title>
</section>
<section class="mt-24">
	<div class="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
		{#each organizers as content, i}
			<div
				in:fly|global={{
					delay: 250 * i,
					duration: 400,
					x: 0,
					y: 100,
					opacity: 0,
				}}
			>
				<OrganizerCard {content}></OrganizerCard>
			</div>
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

		<Link href="/houserules" icon="mdi:house" text="House Rules" hot={false} />
		<Link
			href="https://www.instagram.com/milestoneleaverscamp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
			icon="mdi:instagram"
			text="@milestoneleaverscamp"
			hot={false}
		/>
	</div>
</section>
