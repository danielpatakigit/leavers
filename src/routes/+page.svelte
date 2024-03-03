<script>
	import Icon from "@iconify/svelte";
	import Link from "../lib/components/Link.svelte";
	import Slider from "../lib/components/Slider.svelte";
	import Title from "../lib/components/Title.svelte";
	import Info from "../lib/components/Info.svelte";

	import { testamonials, faq } from "$lib/index.js";
	import TestamonialCard from "../lib/components/TestamonialCard.svelte";
	import QuestionCard from "../lib/components/QuestionCard.svelte";
</script>

<div class="mt-44"></div>
<section class="flex flex-col items-center">
	<h1 class=" flex flex-col text-balance text-center text-4xl">
		<span class="font-sans font-semibold">The Ultimate</span>
		<span class="font-serif font-bold text-gold-800">
			Milestone Experience
		</span>
	</h1>
	<p class="mt-4 text-balance text-center">
		Embark on a journey of community, discovery, <br
			class="hidden md:block"
		/>
		and celebration as we pave the way for your next chapter.
	</p>
	<div class="mt-8 flex flex-col items-center text-center">
		<span class="font-bold">July 31st - August 4th</span>
		<a
			href="/"
			class="flex w-min items-center gap-1 underline"
		>
			<Icon icon="mdi-location"></Icon>
			<span class="">Csórompuszta</span>
		</a>
		<span class="mt-2 text-xs">For Seniors & Alumni</span>
	</div>
	<div class="mt-10 flex gap-4">
		<Link
			href="/#information"
			icon="mdi:info"
			text="Infos"
			hot={false}
		/>
		<Link
			href="/"
			icon=""
			text="Register"
			hot={true}
		/>
	</div>
</section>

<section class="mt-24">
	<Slider>
		{#each Array(10) as _}
			<div
				class=""
				style="flex: 0 0 35%;"
			>
				<img
					src="/placeholder.png"
					alt="placeholder"
					class=""
				/>
			</div>
		{/each}
	</Slider>
</section>
<section class="mt-24">
	<Title
		h1={false}
		id="information"
		tag="Camp information"
		title="Milestone Leavers' Camp 2024"
		subtitle="All you need to know about registering to this year's camp."
	></Title>
</section>

<section class="">
	<Info></Info>
</section>

<section class="mt-24">
	<Title
		h1={false}
		id="experiences"
		tag="past experiences"
		title="Voices of the Milestone Community"
		subtitle="Hear What Others Have to Say About Their Milestone Leavers' Camp Experience"
	></Title>
</section>

<section class="">
	<Slider hasGap={true}>
		{#each testamonials as content, i}
			<TestamonialCard
				style="flex: 0 0 50%;"
				{content}
			></TestamonialCard>
		{/each}
	</Slider>
</section>

<section class="mt-24">
	<Title
		h1={false}
		id="faq"
		tag="FAQ"
		title="You have some questions?"
		subtitle="You might find an answer to it below, if not, make sure to get in contact with us as soon as possible"
	></Title>
</section>
<section class="">
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
		<Link
			href=""
			icon="mdi:house"
			text="House Rules"
			hot={false}
		/>
		<Link
			href=""
			icon="mdi:user"
			text="List of Organizers"
			hot={false}
		/>
		<Link
			href=""
			icon="mdi:instagram"
			text="@milestoneleaverscamp"
			hot={true}
		/>
	</div>
</section>
