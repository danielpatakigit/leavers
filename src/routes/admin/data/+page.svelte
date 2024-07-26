<script>
	/** @type {import('./$types').PageData} */
	export let data;

	// Define the desired order of keys/columns
	const columnOrder = [
		// Important Information
		"created",
		"name",
		"role",
		"diet2",
		"hoodieSize",
		"durationOfStay",
		"accommodationType",
		"deposit_amount",
		"deposit_issued",
		"deposit_payed",
		"remainder_amount",
		"remainder_issued",
		"remainder_payed",
		"university",
		"course",
		"medical",
		"diet",
		// General Information
		"id",
		"updated",
		"user_id",
		// Contact Information
		"email",
		"phoneNumber",
		"streetAndHouseNumber",
		"city",
		"country",
		"zip",
		// Additional Information (if present)
		"acceptsTermsAndConditions",
		"partnerTeamLeader",
		"wantsHoodie",
		"wantsTeamLeader",
		"emailVisibility",
		"familyName",
		"givenName",
		"username",
		"verified",
		"collectionId",
		"collectionName",
		"comment",
	];

	// Helper function to sort object keys based on the defined order
	function sortKeysByOrder(obj, order) {
		const orderedObj = {};
		const remainingKeys = Object.keys(obj).filter(
			(key) => !order.includes(key),
		);

		// Add keys in defined order
		order.forEach((key) => {
			if (obj.hasOwnProperty(key)) {
				orderedObj[key] = obj[key];
			}
		});

		// Add remaining keys at the end
		remainingKeys.forEach((key) => {
			orderedObj[key] = obj[key];
		});

		return orderedObj;
	}

	// Sort keys for each record
	const sortedRecords = data.records.map((record) =>
		sortKeysByOrder(record, columnOrder),
	);
</script>

<h1 class="mt-24 text-center text-3xl font-bold">Data Input Page</h1>
<pre>{JSON.stringify(data, null, 2)}</pre>
<table class="min-w-full divide-y divide-gray-200">
	<thead class="bg-gray-50">
		{#each sortedRecords as record, i}
			{#if i === 0}
				<tr>
					{#each Object.keys(record) as key}
						<th
							class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
						>
							{key}
						</th>
					{/each}
				</tr>
			{/if}
		{/each}
	</thead>
	<tbody class="divide-y divide-gray-200 bg-white">
		{#each sortedRecords as record, i}
			<tr>
				{#each Object.values(record) as value}
					<td class="whitespace-nowrap px-6 py-4">{value}</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>
