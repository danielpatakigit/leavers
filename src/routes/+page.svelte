<script>
	import Icon from "@iconify/svelte";
	import Link from "../lib/components/Link.svelte";
	import Slider from "../lib/components/Slider.svelte";
	import Title from "../lib/components/Title.svelte";
	import Info from "../lib/components/Info.svelte";
	import TestamonialCard from "../lib/components/TestamonialCard.svelte";
	import QuestionCard from "../lib/components/QuestionCard.svelte";
	import { meta, testimonials, faq } from "$lib/index.js";

	export let data;
</script>

<svelte:head>
	<title>{meta["index"].title}</title>
	<meta name="description" content={meta["index"].description} />
	<meta name="keywords" content={meta["index"].keywords} />
</svelte:head>

<div class="mt-44"></div>

<section class="flex flex-col items-center">
	<h1 class="flex flex-col text-balance text-center text-4xl">
		<span class="font-sans font-semibold">The Ultimate</span>
		<span class="mt-2 font-serif font-bold text-gold-800">
			Milestone Experience
		</span>
	</h1>
	<p class="mt-4 text-balance text-center">
		Embark on a journey of community, discovery,
		<br class="hidden md:block" />
		and celebration as we pave the way for your next chapter.
	</p>
	<div class="mt-8 flex flex-col items-center text-center">
		<span class="font-bold">July 31st - August 4th</span>
		<div class="mt-2 flex items-center gap-1">
			<Icon icon="mdi-location"></Icon>
			<span class="">Csórompuszta</span>
		</div>
		<span class="mt-2 text-xs">For Seniors & Alumni</span>
	</div>
	<div class="mt-10 flex gap-4">
		<Link href="/#information" icon="mdi:info" text="Infos" hot={false} />
		{#if !data?.user}
			<!-- <Link href="/register" icon="" text="Register" hot={true} /> -->
		{/if}
	</div>
</section>

<section class="mt-24">
	<Slider>
		{#each ["/leavers_photo_8.jpg", "/leavers_photo_6.jpg", "/leavers_photo_9.jpg", "/leavers_photo_2.jpg", "/leavers_photo_3.jpg", "/leavers_photo_1.jpg", "/leavers_photo_4.jpg", "/leavers_photo_7.jpg"] as src}
			<img {src} alt={src} />
		{/each}
	</Slider>
</section>

<section class="mt-24">
	<Title
		h1={false}
		id="information"
		tag="Camp information"
		title="Milestone Leavers' Camp 2024"
		subtitle="All you need to know about registering to this year's camp"
	></Title>
</section>

<section>
	<Info {data}></Info>
</section>

<section class="mt-24">
	<Title
		h1={false}
		id="experiences"
		tag="past experiences"
		title="Voices of the Milestone Community"
		subtitle="Hear what others have to say about their Leavers' Camp experience"
	></Title>
</section>

<section>
	<Slider hasGap={true}>
		{#each testimonials as content, i}
			<TestamonialCard class="flex-[0_0_80%] md:flex-[0_0_55%]" {content}
			></TestamonialCard>
		{/each}
	</Slider>
</section>

<section class="mt-24">
	<Title
		h1={false}
		id="faq"
		tag="FAQ"
		title="Do you have any questions?"
		subtitle="You might find an answer to it below, if not, make sure to get in contact with us as soon as possible"
	></Title>
</section>

<section>
	<div class="flex flex-wrap gap-8">
		{#each faq as content}
			<QuestionCard {content}></QuestionCard>
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
		<Link href="/houserules" icon="mdi:house" text="House Rules" hot={false} />
		<Link
			href="/organizers"
			icon="mdi:user"
			text="List of Organizers"
			hot={false}
		/>
		<Link
			href="https://www.instagram.com/milestoneleaverscamp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
			icon="mdi:instagram"
			text="@milestoneleaverscamp"
			hot={true}
		/>
	</div>
</section>
