<script>
	import { invalidateAll } from "$app/navigation";
	import { invalidate } from "$app/navigation";
	import PocketBase from "pocketbase";
	import { tick } from "svelte";
	const pb = new PocketBase("https://pb.leavers.hu");

	export let data;

	let username = "";
	let email = "";
	let issued = "";
	let payed = "";
	let type = "";
	let minAmount = null;
	let maxAmount = null;
	let country = "";
	let city = "";
	let zip = "";
	let streetAndHouseNumber = "";
	let role = ""; // Added role field
	let selectedIds = [];
	let csv = "hello fsdfsd";

	let saveIssueDate = "";
	let savePayedDate = "";

	$: csv = selectedIds
		.map((id) => {
			const payment = data.payments.find((payment) => payment.id === id);
			return `${payment.amount}, Milestone Leavers' Camp 2024 - részvételi díj - ${payment.type === "deposit" ? "1." : "2."} részlet, , ${payment.expand.user.email}, ${payment.zip}, ${payment.city}, ${payment.streetAndHouseNumber}, , ${payment.expand.user.givenName}, ${payment.expand.user.familyName}`;
		})
		.join("\n");

	$: filteredData =
		username ||
		issued ||
		payed ||
		type ||
		email ||
		minAmount ||
		maxAmount ||
		country ||
		city ||
		zip ||
		streetAndHouseNumber ||
		role // Added role field
			? data.payments.filter((payment) => {
					return (
						payment.expand.user.name
							.toLowerCase()
							.includes(username.toLowerCase()) &&
						payment.expand.user.email
							.toLowerCase()
							.includes(email.toLowerCase()) &&
						payment.issued.toLowerCase().includes(issued.toLowerCase()) &&
						payment.payed.toLowerCase().includes(payed.toLowerCase()) &&
						payment.type.toLowerCase().includes(type.toLowerCase()) &&
						(payment.amount >= minAmount || minAmount === null) &&
						(payment.amount <= maxAmount || maxAmount === null) &&
						payment.country.toLowerCase().includes(country.toLowerCase()) &&
						payment.city.toLowerCase().includes(city.toLowerCase()) &&
						payment.zip.toLowerCase().includes(zip.toLowerCase()) &&
						payment.streetAndHouseNumber
							.toLowerCase()
							.includes(streetAndHouseNumber.toLowerCase()) &&
						payment.expand.user.role.toLowerCase().includes(role.toLowerCase())
					);
				})
			: data.payments;

	function calculateDaysAgo(created) {
		const now = new Date();
		const createdDate = new Date(created);
		const diffTime = Math.abs(now - createdDate);
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
		return diffDays;
	}

	function sliceDay(date) {
		return date.slice(0, 10);
	}

	async function save() {
		const confirmed = confirm("Are you sure you want to save the data?");
		if (!confirmed) {
			return;
		}

		const data = {
			issued: saveIssueDate,
			payed: savePayedDate,
		};
		selectedIds.forEach(async (id) => {
			const response = await pb.collection("payments").update(id, data);
		});

		// reload the data
		await invalidateAll();
		// throw some kind of success message
		alert(`Data saved successfully for ${selectedIds.length} records!`);
	}

	let selectAllChecked = false;

	function toggleSelectAll() {
		if (selectAllChecked) {
			selectedIds = [];
		} else {
			selectedIds = filteredData.map((payment) => payment.id);
		}
		selectAllChecked = !selectAllChecked;
	}
</script>

<h1 class="mt-24 text-center text-3xl font-bold">Admin Page</h1>

<div
	class="sticky top-0 mx-4 mt-12 grid h-[6rem] grid-cols-[repeat(auto-fit,_200px)] items-center justify-center gap-2 border bg-white p-2"
>
	<h2 class="text-2xl font-bold">Filter</h2>
	<div class="mb-4">
		<label for="username-filter" class="mr-2">Username:</label>
		<input
			type="text"
			id="username-filter"
			class="border p-2"
			bind:value={username}
		/>
	</div>
	<div class="mb-4">
		<label for="role-filter" class="mr-2">Role:</label>
		<input type="text" id="role-filter" class="border p-2" bind:value={role} />
	</div>
	<div class="mb-4">
		<label for="type-filter" class="mr-2">Type:</label>
		<input type="text" id="type-filter" class="border p-2" bind:value={type} />
	</div>
	<div class="mb-4">
		<label for="issued-filter" class="mr-2">Issued:</label>
		<input
			type="text"
			id="issued-filter"
			class="border p-2"
			bind:value={issued}
		/>
	</div>
	<div class="mb-4">
		<label for="payed-filter" class="mr-2">Payed:</label>
		<input
			type="text"
			id="payed-filter"
			class="border p-2"
			bind:value={payed}
		/>
	</div>
	<div class="mb-4">
		<label for="email-filter" class="mr-2">Email:</label>
		<input
			type="text"
			id="email-filter"
			class="border p-2"
			bind:value={email}
		/>
	</div>

	<div class="mb-4">
		<label for="min-amount-filter" class="mr-2">Min Amount:</label>
		<input
			type="number"
			id="min-amount-filter"
			class="border p-2"
			bind:value={minAmount}
		/>
	</div>
	<div class="mb-4">
		<label for="max-amount-filter" class="mr-2">Max Amount:</label>
		<input
			type="number"
			id="max-amount-filter"
			class="border p-2"
			bind:value={maxAmount}
		/>
	</div>
	<!-- <div class="mb-4">
		<label for="country-filter" class="mr-2">Country:</label>
		<input
			type="text"
			id="country-filter"
			class="border p-2"
			bind:value={country}
		/>
	</div> -->
	<!-- <div class="mb-4">
		<label for="city-filter" class="mr-2">City:</label>
		<input type="text" id="city-filter" class="border p-2" bind:value={city} />
	</div>
	<div class="mb-4">
		<label for="zip-filter" class="mr-2">Zip:</label>
		<input type="text" id="zip-filter" class="border p-2" bind:value={zip} />
	</div>
	<div class="mb-4">
		<label for="street-filter" class="mr-2">Street and House:</label>
		<input
			type="text"
			id="street-filter"
			class="border p-2"
			bind:value={streetAndHouseNumber}
		/>
	</div> -->
</div>
<section class="mb-2 mt-12">
	<div class="text-xl font-bold">Records selected: {selectedIds.length}</div>
</section>
<section class=" grid grid-cols-2 gap-6">
	<div class="border p-2">
		<h2 class="font-bold">Bulk Actions For Selected Records</h2>
		<div class="mt-6 flex gap-6">
			<div class="">
				<h3>Set Issue Date</h3>
				<input type="date" class="border p-2" bind:value={saveIssueDate} />
				<button class="" on:click={() => (saveIssueDate = null)}>
					Set to null
				</button>
			</div>
			<div>
				<h3>Set Payed Date</h3>
				<input type="date" class="border p-2" bind:value={savePayedDate} />
				<button class="" on:click={() => (savePayedDate = null)}>
					Set to null
				</button>
			</div>
		</div>
		<button class="ml-auto mt-4 block border p-2 font-bold" on:click={save}>
			Save
		</button>
	</div>
	<div class="border p-2">
		<h2 class="font-bold">Bulk CSV Copy</h2>
		<div class="mt-6">
			<div class="max-h-24 overflow-y-scroll border p-2">
				<span>{csv}</span>
			</div>
		</div>
		<button
			class=" ml-auto mt-4 block border p-2 font-bold"
			on:click={() => {
				const textarea = document.createElement("textarea");
				textarea.value = csv.trim();
				document.body.appendChild(textarea);
				textarea.select();
				document.execCommand("copy");
				document.body.removeChild(textarea);
			}}
		>
			Copy CSV
		</button>
	</div>
</section>

<table class="mx-auto px-6">
	<thead
		class="sticky top-[6rem] mb-2 border-4 bg-white pb-5 text-lg leading-[4rem] shadow-md"
	>
		<tr class="divide-x-2 *:px-2">
			<th class="flex flex-col *:cursor-pointer">
				<label for="select-all-checkbox">
					{selectedIds.length <= 0
						? "Select All"
						: "Selected: " + selectedIds.length}
				</label>
				<input
					id="select-all-checkbox"
					type="checkbox"
					bind:checked={selectAllChecked}
					on:click={toggleSelectAll}
				/>
			</th>
			<th>Created Date</th>
			<th>User Name</th>
			<th>Role</th>
			<th>Issue Date</th>
			<th>Payed Date</th>
			<th>Type</th>
			<th>Amount</th>

			<th>User Email</th>
			<th>Country</th>
			<th>City</th>
			<th>Zip</th>
			<th>Street and House</th>
		</tr>
	</thead>
	<tbody>
		{#each filteredData as payment}
			<tr class="leading-10 *:px-2 odd:bg-gray-100">
				<td>
					<input type="checkbox" value={payment.id} bind:group={selectedIds} />
				</td>
				<td>
					{sliceDay(payment.created)} ({calculateDaysAgo(payment.created)} days ago)
				</td>
				<td>{payment.expand.user.name}</td>
				<td>{payment.expand.user.role}</td>
				<td>
					{#if payment.issued != ""}
						{sliceDay(payment.issued)} ({calculateDaysAgo(payment.issued)} days ago)
					{/if}
				</td>
				<td>
					{#if payment.payed != ""}
						{sliceDay(payment.payed)} ({calculateDaysAgo(payment.payed)} days ago)
					{/if}
				</td>
				<td>{payment.type}</td>
				<td>{payment.amount}</td>

				<td>{payment.expand.user.email}</td>
				<td>{payment.country}</td>
				<td>{payment.city}</td>
				<td>{payment.zip}</td>
				<td>{payment.streetAndHouseNumber}</td>
			</tr>
		{/each}
	</tbody>
</table>

<style lang="postcss">
	input[type="checkbox"] {
		@apply mx-auto block h-6 w-6 cursor-pointer;
	}

	:global(header) {
		position: static !important;
	}
</style>
