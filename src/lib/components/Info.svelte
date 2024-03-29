<script>
	import Icon from "@iconify/svelte";
	import Link from "./Link.svelte";
	import { roles } from "$lib";

	export let data;

	let selectedRole = ""; // Default role, can be 'leavers' or 'alumni'
</script>

<div
	class=" rounded-2xl border-4 border-gold-800 bg-gold-100 px-6 py-8 md:px-8"
>
	<h2>About the Leavers' Camp</h2>
	<p>
		The Milestone Leavers' Camp (MSLC24) in Csórompuszta, Hungary, scheduled for
		July 31st to August 4th, 2024, is <strong>exclusively</strong>
		tailored for graduating students from Milestone who have
		<strong>successfully completed their senior year.</strong>
		However, Milestone alumni are also invited to join.
	</p>
	<p>
		At the Milestone Leavers' Camp, our primary aim is to foster community,
		explore identity, and promote self-discovery among participants. Throughout
		the program, attendees can expect a variety of engaging activities including
		games, workshops, the official Milestone graduation ceremony (!) and other
		fun-filled experiences.
	</p>
	<h3 class="text-center">Select your role in Milestone to see details</h3>
	<fieldset class="mt-2 flex flex-row gap-4">
		{#each roles.slice(0, 2) as role, i}
			<div class="w-full">
				<input
					type="radio"
					name="role"
					value={role.value}
					id={role.value}
					class="peer hidden"
					bind:group={selectedRole}
				/>

				<label for={role.value} class="role-label py-6">
					<div class="">
						<Icon class="text-4xl text-gold-900" icon={role.icon}></Icon>
					</div>
					{role.label}
				</label>
			</div>
		{/each}
	</fieldset>

	<!-- Common section for both leavers and alumni -->
	{#if selectedRole === "leaver"}
		<div>
			<h3>Leaver Camp Prices and Registration Details</h3>
			<span>Camp prices for leavers:</span>
			<li>
				For Milestone seniors (leavers): <br class="md:hidden" />
				<strong>60 000 Ft for the whole camp</strong>
			</li>
			<span>Issued in two instalments:</span>
			<li>
				Deposit instalment: 20 000 Ft (issued a few days after you register)
			</li>
			<li>Remainder instalment: 40 000 Ft (issued on June 17)</li>
			<span>This price includes:</span>
			<li>Guaranteed indoor accommodation</li>
			<li>Breakfast, lunch, and dinner</li>
			<li>4 days of camp activities</li>
			<li>An official Milestone hoodie</li>
			<li>Transportation to and from the camp</li>
		</div>
	{/if}

	{#if selectedRole === "alumni"}
		<div>
			<h3>Alumni Camp Prices and Registration Details</h3>
			<span>Camp prices for alumni:</span>
			<li>
				For Milestone alumni: <br class="md:hidden" />
				<strong>15 000 Ft per day</strong>
			</li>
			<li>
				For team leaders: <br class="md:hidden" />
				<strong>50 000 Ft for the whole camp</strong>
			</li>

			<span>Issued in two instalments:</span>
			<li>
				Deposit instalment: 50% of the overall fee (issued a few days after you
				register)
			</li>
			<li>Remainder instalment: 50% of the overall fee (issued on June 17)</li>

			<span>This price includes:</span>
			<li>Accommodation on camp grounds (indoors not guaranteed)</li>
			<li>Breakfast, lunch, and dinner</li>
			<li>Access to all camp activites</li>
			<li>A chance to partake in an exclusive alumni only event</li>
			<li>The opportunity to reconnect with the Milestone community</li>
		</div>
	{/if}
	{#if selectedRole}
		<span>Important!</span>
		<li class="">
			If you register to the camp after June 17. you will only receive a full amount fee request. The same rules will still apply.
		</li>
		<li>
			Make sure to pay all fee requests within 3 days. If you don't, we will
			immediately cancel your registration.
		</li>
		<li>Completed payments are non-refundable!</li>
		<span>
			For more information please read the <a href="/#faq">FAQ.</a>
		</span>
	{/if}

	<div class="mt-10 flex items-center justify-center">
		{#if !data?.user}
			<Link href="/register" icon="" text="Register Now!" hot={true} />
		{:else}
			<Link
				href="/myregistration"
				icon="solar:paperclip-linear"
				text="My Registration"
				hot={true}
			/>
		{/if}
	</div>
</div>
<div class="mt-16">
	<img src="/leavers_photo_group.jpg" alt="" class="rounded-xl" />
</div>

<style lang="postcss">
	h2 {
		@apply text-center text-2xl font-bold;
	}

	h3 {
		@apply mb-6 mt-10 text-xl font-bold;
	}

	span {
		@apply mt-4 block font-bold;
	}

	p {
		@apply mt-4;
	}

	li {
		@apply mt-2;
	}

	a {
		@apply underline;
	}

	.role-label {
		@apply flex cursor-pointer flex-col items-center justify-center rounded-2xl border-4 bg-white px-6 text-center text-xl font-bold hover:border-gold-400 hover:bg-gold-100 hover:opacity-100 peer-checked:border-gold-900 peer-checked:bg-gold-300 peer-checked:opacity-100;
	}
</style>
