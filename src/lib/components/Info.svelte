<script>
	import Icon from "@iconify/svelte";
	import Link from "./Link.svelte";
	import { roles } from "$lib";

	export let data;

	let selectedRole = ""; // Default role, can be 'leavers' or 'alumni'
</script>

<div
	class=" mb-4 rounded-2xl border-4 border-gold-800 bg-gold-100 px-6 py-8 md:px-8"
>
	<h2>INFOPACK</h2>
	<p>
		<strong>
			Registration to the 2024 Leavers' Camp is officially closed now.
		</strong>
		 Here is everything you need to know about your arrival to the camp.
	</p>
	<p style="text-align:justify;">Dear Leavers, Staff &amp; Alumni,</p>
	<p style="text-align:justify;">
		As Leavers’ Camp 2024 is fast approaching we wanted to share some essential
		information with you.&nbsp;
	</p>
	<p style="text-align:justify;">
		<strong>JOIN TODAY</strong>
		<strong>!!4!!!!444</strong>
	</p>
	<p style="text-align:justify;">
		This group chat is important for general updates before, during and after
		the camp and is also a place to share your experiences with other campers
		(photos, memes, shower thoughts, gossip etc. all allowed).
	</p>
	<p style="text-align:justify;">
		<a target="_blank" href="https://chat.whatsapp.com/GKI78wPssuc9n5pYtxqakq">
			<span style="color:rgb(17, 85, 204);">
				https://chat.whatsapp.com/GKI78wPssuc9n5pYtxqakq
			</span>
		</a>
	</p>
	<p style="text-align:justify;">
		<strong>[ EVERYBODY ]</strong>
	</p>
	<p style="text-align:justify;">
		<strong>What to bring:</strong>
	</p>
	<ul>
		<li>
			<strong>Sleeping bag &amp; pillow:</strong>
			To assure that everyone has enough blankets and pillows for the night, we ask
			you to bring your own sleeping bag and a pillow if you can.
		</li>
		<li>
			<strong>Comfortable Clothing:</strong>
			Pack casual, comfortable clothes for various outdoor activities and prepare
			for the hot weather! Please also note that evenings may get a bit cold, so
			make sure to bring some layers just in case. Do not forget your sun protection
			either!&nbsp;
		</li>
		<li>
			<strong>Shoes:</strong>
			Bring closed shoes and also slippers for the showers. Please be aware that
			they may get a bit dirty during the outdoor activities, depending on the weather.
		</li>
		<li>
			<strong>Raincoat</strong>
			: Let’s hope you will not have to use it, but make sure that you have a raincoat
			and a change of shoes in case the weather turns rainy!
		</li>
		<li>
			<strong>Reusable cup/mug:</strong>
			We ask you to bring your own glass to avoid the overflowing of sinks with undone
			dishes.
		</li>
		<li>
			<strong>Any prescription medication you require:</strong>
			Please remember to bring any medications prescribed to you and do not forget
			to inform the Organiser Committee about any medical or accessibility needs
			you may have.
		</li>
		<li>
			<strong>Other</strong>
			: Bathroom necessities, sunscreen, mosquito repellent, board games, cards,
			snacks, instruments, balls, etc. If you have any questions about additional
			items you may consider bringing, please do not hesitate to contact us!
		</li>
	</ul>
	<ul>
		<li>
			<strong>Optional</strong>
			: Leavers, if you prefer to sleep in a tent instead of the house dedicated
			for students, please let us know, and also bring all necessary camping equipment
			you may need! We have plenty of space on camp grounds that are suitable for
			tents.
		</li>
	</ul>
	<h3 style="text-align:justify;">What not to bring:</h3>
	<ul>
		<li>
			<strong>Alcohol:</strong>
			Do not worry about bringing your own drinks to the camp, our trusted friends
			at Crafty Bar Budapest will supply an assortment of wines, beers and cocktails!
		</li>
		<li>
			<strong>Precious items:</strong>
			Any items you bring to Leavers’ Camp are your responsibility. We advise against
			bringing valuables.
		</li>
	</ul>
	<h3 style="text-align:justify;">[ FOR LEAVERS ]</h3>
	<ul>
		<li>
			<strong>Your car:</strong>
			&nbsp; All Leavers are required to arrive via the train and private bus, and
			it is strictly forbidden to leave campgrounds without discussing it with the
			Organizer Team first.
		</li>
	</ul>
	<h3 style="text-align:justify;">Your first day at the camp:</h3>
	<p style="text-align:justify;">
		<strong>[ LEAVERS ]</strong>
	</p>
	<ul>
		<li>
			Meet us no later than
			<strong>10:30 at Déli Pályaudvar</strong>
			to board the train taking all Leavers to Veszprém where a bus will pick you
			up and take you to Csórompuszta.
			<strong>Important:</strong>
			Due to changes in the MÁV ticket system it has become no longer financially
			viable for us organizers to buy the train tickets for you. This is why we would
			kindly like to ask all leavers who don’t already have a
			<strong>Hungary Pass</strong>
			(aka
			<strong>Országbérlet</strong>
			)
			<strong>valid until at least August 4th</strong>
			to please purchase one
			<strong>with your student ID</strong>
			(1890 Ft, can be purchased through the Budapest GO app as well).&nbsp;
		</li>
		<li>
			Once you arrive at Déli Pályaudvar please find the two
			<strong>Milestone staff members</strong>
			and join the rest of the group.
		</li>
		<li>
			Please bring lots of
			<strong>water</strong>
			with you for the trip, as it may be difficult to purchase more on the way,
			and proper hydration is crucial in this July heat.
		</li>
		<li>
			Make sure to bring
			<strong>lunch</strong>
			with you for the first day, your first meal at the camp will be dinner.
		</li>
		<li>
			Please keep an eye out for the safety and wellbeing of all fellow
			travelers throughout the whole trip to the camp.
		</li>
	</ul>
	<p style="text-align:justify;">
		<strong>[ STAFF AND ALUMNI ]</strong>
	</p>
	<ul>
		<li>
			The location of the camp is
			<strong>Csórompuszta, Vigántpetend, 8294.</strong>
			Please be aware that as Staff and Alumni you are required to organize your
			own method of transportation to the camp. To make things easier, we created
			a Carpool document which you can find through this link:&nbsp;
		</li>
	</ul>
	<p style="text-align:justify;">
		<a
			target="_blank"
			href="https://docs.google.com/spreadsheets/d/1ixLu28aWrdKcFJhnxI5Bwpi-qnrlT0TGT6jesBMewjs/edit?usp=sharing"
		>
			<span style="color:rgb(17, 85, 204);">
				https://docs.google.com/spreadsheets/d/1ixLu28aWrdKcFJhnxI5Bwpi-qnrlT0TGT6jesBMewjs/edit?usp=sharing
			</span>
		</a>
	</p>
	<ul>
		<li>
			<strong>Upon arrival</strong>
			, please write a short message in the camp group chat (see above) letting us
			know that you’ve arrived and are ready to check in. After that members of the
			Organizer Team will let you know when and where to meet them.
		</li>
		<li>
			<strong>Accommodation:</strong>
			Due to the limited number of available indoor sleeping places, we unfortunately
			had to reallocate some of you to the outdoor accommodation. If this was the
			case for you, we will contact you in a separate email, or maybe already have
			done so. Therefore, we kindly ask you to bring a tent or arrive with a car
			you can also sleep in. (Bed sharing or any other Honfoglaló-type moves are
			strongly frowned upon!)
		</li>
	</ul>
	<h3 style="text-align:justify;">Other essential info:</h3>
	<ul>
		<li>
			House Rules: Familiarize yourself with <a href="/houserules">
				the camp’s rules
			</a>
			available on our website!
		</li>
		<li>
			Departure Day: Camp ends at 14:00 on the last day (August 4), after which
			the train and bus will bring all Leavers back to Déli Pályaudvar. The
			expected time of arrival is around 18:00 on August 4th (Sunday). Staff and
			Alumni are welcome to stay longer or leave earlier as they please.
		</li>
		<li>
			Activities and Schedule: A detailed schedule of activities will be
			provided upon arrival. Get ready for an exciting array of games,
			workshops, and social events!
		</li>
	</ul>
	<p>
		If you have any questions, updates or concerns please do not hesitate to
		contact us by replying to this email or through the WhatsApp group chat (see
		link above)!&nbsp;
	</p>
	<p>We look forward to seeing all of you soon!</p>
</div>

<details
	class=" rounded-2xl border-4 border-gold-800 bg-gold-100 px-6 py-8 md:px-8"
>
	<summary>
		<h2>About the Leavers' Camp</h2>
	</summary>
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
			<!-- <Link href="/register" icon="" text="Register Now!" hot={true} /> -->
		{:else}
			<Link
				href="/myregistration"
				icon="solar:paperclip-linear"
				text="My Registration"
				hot={true}
			/>
		{/if}
	</div>
</details>
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
