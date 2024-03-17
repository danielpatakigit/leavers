<script>
	import { confetti } from "@neoconfetti/svelte";
	import Title from "../../lib/components/Title.svelte";
	import { fade, scale } from "svelte/transition";
	import { onMount } from "svelte";
	import Loader from "../../lib/components/Loader.svelte";

	/** @type {import('./$types').PageData} */
	export let data;

	onMount(() => {
		console.log(data);
	});
</script>

<div class="mt-36"></div>

<section class="">
	<div
		transition:fade
		class="mx-auto overflow-hidden"
		use:confetti={{
			particleCount: 160,
			particleSize: 12,
			duration: 2500,
			destroyAfterDone: true,
			stageWidth: 1200,
			stageHeight: 1000,
		}}
	/>
	<Title
		h1={true}
		id="success"
		tag="REGISTRATION status"
		title="Successful Registration!"
		subtitle="If you're seeing this, that means we have successfully received your registration for Milestone Leavers' Camp 2024. Keep an eye out for incoming emails and don't forget to pay the fee requests to keep your place in the camp! "
	/>
</section>

<section class="mt-36">
	<h2>Camp Fees</h2>
	{#await data.payments}
		<div class="mt-6 flex items-center justify-center space-x-2" in:fade>
			<span class="sr-only">Loading...</span>
			<div
				class="h-4 w-4 animate-bounce rounded-full bg-gold-900 [animation-delay:-0.3s]"
			></div>
			<div
				class="h-4 w-4 animate-bounce rounded-full bg-gold-900 [animation-delay:-0.15s]"
			></div>
			<div class="h-4 w-4 animate-bounce rounded-full bg-gold-900"></div>
		</div>
	{:then payments}
		<table class="" transition:scale>
			<!-- <thead>
			<tr>
				<th>Label</th>
				<th>Value</th>
			</tr>
		</thead> -->

			{#each payments as payment}
				<tbody>
					<tr>
						<td>Type/Name</td>
						<td>
							{payment.type === "remainder"
								? payment.extraHoodieIncluded
									? "Remainder + Milestone Hoodie"
									: "Remainder"
								: "Deposit"}
						</td>
					</tr>
					<tr>
						<td>Amount</td>
						<td>{payment.amount} Ft</td>
					</tr>
					<tr>
						<td>Date of Issue</td>
						<td>
							{(payment.issued &&
								new Date(payment.issued).toLocaleDateString("hu-HU")) ||
								"Not issued yet"}
						</td>
					</tr>
					<tr>
						<td>Date of Completion</td>
						<td>
							{(payment.payed &&
								new Date(payment.payed).toLocaleDateString("hu-HU")) ||
								"Not completed yet"}
						</td>
					</tr>
				</tbody>
			{/each}
		</table>
	{/await}
	<h2>Registration Details</h2>
	{#await data.submissions}
		<div class="mt-6 flex items-center justify-center space-x-2" in:fade>
			<span class="sr-only">Loading...</span>
			<div
				class="h-4 w-4 animate-bounce rounded-full bg-gold-900 [animation-delay:-0.3s]"
			></div>
			<div
				class="h-4 w-4 animate-bounce rounded-full bg-gold-900 [animation-delay:-0.15s]"
			></div>
			<div class="h-4 w-4 animate-bounce rounded-full bg-gold-900"></div>
		</div>
	{:then submissions}
		<table class="" transition:scale>
			<!-- <thead>
			<tr>
				<th>Label</th>
				<th>Value</th>
			</tr>
		</thead> -->
			<tbody>
				<tr>
					<td>Full Name</td>
					<td>{data.user.name}</td>
				</tr>
				<tr>
					<td>Email</td>
					<td>{data.user.email}</td>
				</tr>
				<tr>
					<td>Date of Registration</td>
					<td>
						{(data.user.created &&
							new Date(data.user.created).toLocaleDateString("hu-HU")) ||
							"Not registered yet"}
					</td>
				</tr>
			</tbody>

			{#each submissions as submission}
				<tbody>
					<tr>
						<td>Role</td>
						<td>
							{#if data.user.role === "leaver"}
								Leaver
							{:else if data.user.role === "alumni"}
								Alumni
							{:else if data.user.role === "staff"}
								Staff/Faculty
							{:else if data.user.role === "organizer"}
								Organizer
							{:else}
								Unknown
							{/if}
						</td>
					</tr>
					{#if submission.role !== "leaver"}
						<tr>
							<td>Team Leader Role</td>
							<td>
								{submission.wantsTeamLeader
									? "Yes, wants to be team leader"
									: "No, doesn't want to be team leader"}
							</td>
						</tr>
						{#if submission.wantsTeamLeader}
							<tr>
								<td>Partner Team Leader</td>
								<td>{submission.partnerTeamLeader}</td>
							</tr>
						{/if}
					{/if}
					{#if submission.role !== "leaver"}
						<tr>
							<td>Ordered Extra Hoodie</td>
							<td>{submission.wantsHoodie ? "Yes" : "No"}</td>
						</tr>
					{/if}

					<tr>
						<td>Phone Number</td>
						<td>{submission.phoneNumber}</td>
					</tr>

					<tr>
						<td>Accommodation Type</td>
						<td>{submission.accommodationType}</td>
					</tr>

					<tr>
						<td>Duration of Stay</td>
						<td>
							{submission.durationOfStay.length >= 4
								? "Whole Duration (Wednesday - Sunday)"
								: submission.durationOfStay.join(", ")}
						</td>
					</tr>

					<tr>
						<td>Billing City</td>
						<td>{submission.city}</td>
					</tr>

					<tr>
						<td>Billing Country</td>
						<td>{submission.country}</td>
					</tr>

					<tr>
						<td>Billing ZIP</td>
						<td>{submission.zip}</td>
					</tr>

					<tr>
						<td>Billing Street and House</td>
						<td>{submission.streetAndHouseNumber}</td>
					</tr>

					<tr>
						<td>Medical Conditions</td>
						<td>{submission.medical}</td>
					</tr>

					<tr>
						<td>Diet</td>
						<td>{submission.diet}</td>
					</tr>

					{#if submission.role !== "staff"}
						<tr>
							<td>University</td>
							<td>{submission.university}</td>
						</tr>

						<tr>
							<td>Course</td>
							<td>{submission.course}</td>
						</tr>
					{/if}

					<tr>
						<td>Comment</td>
						<td>{submission.comment}</td>
					</tr>
				</tbody>
			{/each}
		</table>
	{/await}
</section>

<style lang="postcss">
	/* Define custom styles */
	h2 {
		@apply mt-14 text-center text-2xl font-semibold;
	}

	table {
		@apply mt-4 w-full;
	}

	td {
		@apply border px-4 py-2;
	}

	/* th {
		@apply bg-gray-100 text-sm font-bold uppercase text-gray-800;
	} */

	td {
		@apply bg-inherit text-sm  text-gray-700;
	}
	td:first-child {
		@apply bg-zinc-100 font-semibold;
	}
	tr {
		@apply grid grid-cols-2 break-words md:grid-cols-[20rem,_1fr];
	}

	tbody {
		@apply mb-6 block rounded-lg border-2;
	}
</style>
