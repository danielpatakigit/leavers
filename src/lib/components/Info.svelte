<script>
	import Link from "./Link.svelte";
</script>

<div
	class=" mx-2 rounded-2xl border-4 border-gold-800 bg-gold-100 px-8 py-8"
>
	<h2>About the Leavers' Camp!</h2>
	<p>
		The Milestone Leavers' Camp (MSLC24) in Csórompuszta, Hungary,
		scheduled for July 31st to August 4th, 2024, is <strong>
			exclusively
		</strong>
		tailored for graduating students from Milestone who have
		<strong>completed their senior year successfully</strong>
		(a.k.a). However, Milestone alumni are also invited to join in.
	</p>
	<p>
		At the Milestone Leavers' Camp, our primary aim is to foster
		community, explore identity, and promote self-discovery among
		participants. Throughout the program, attendees can expect a
		variety of engaging activities, including games, workshops, the
		official Milestone graduation ceremony (!) and other fun-filled
		experiences.
	</p>

	<h3>Camp prices</h3>
	<ul>
		<li>For Milestone Seniors: 60.000 Ft for the whole camp</li>
		<li>
			For Milestone Alumni: 15.000 Ft per night (only 12.500 Ft if
			you're also a team leader)
		</li>
	</ul>

	<span class="strong">These prices include:</span>
	<ul>
		<li>
			Indoor accommodation guaranteed for leavers and optional for
			alumni (see FAQ for details)
		</li>
		<li>Breakfast, lunch, and dinner</li>
		<li>
			Access to activities organized for both leavers and alumni
		</li>
		<li>
			An official Milestone hoodie (included in the price for leavers,
			optional for others)
		</li>
		<li>Transportation to and from the camp (only for leavers)</li>
	</ul>

	<h3>Registration & Payment Process</h3>
	<ol>
		<li>
			Click on <a href="/register">register</a>
			and then log in with your Google account to confirm your identity.
		</li>
		<li>Fill out the Google Form with your information.</li>
	</ol>
	<p>
		After you've registered Milestone will send out a fee request per
		email for
		<strong>the deposit amount.</strong>
		Please make sure to pay this fee
		<strong>within 3 days</strong>
		. If you don't we will
		<strong>immediately cancel your registration.</strong>
	</p>
	<p>
		The remainder part of your participation fee will be issued to you
		on the 17th of June, exactly 6 weeks before the week of the camp.
		Make sure to pay this fee too within 3 days to keep your
		registration.
	</p>
	<p>
		If you register to the camp after the 17th of the June you will
		only receive one fee request for the full amount. The same rules
		will still apply.
	</p>
	<p>
		Please note that all completed transactions are non-refundable!
	</p>
	<p>
		For further information and answers to your potential questions
		please see the <a href="/#faq">FAQ.</a>
	</p>
	<div class="mt-10 flex items-center justify-center">
		<Link
			href="/"
			icon=""
			text="Register Now!"
			hot={true}
		/>
	</div>
</div>

<style lang="postcss">
	h2 {
		@apply text-2xl font-bold;
	}
	h3 {
		@apply mt-10 text-xl font-bold;
	}

	p {
		@apply mt-4 font-normal;
	}

	span {
		@apply mt-4 block font-bold;
	}
	ul {
		@apply list-disc;
	}

	ol {
		@apply list-decimal;
	}

	ul,
	ol {
		@apply mt-2 list-inside;
	}

	a {
		@apply underline;
	}
</style>
