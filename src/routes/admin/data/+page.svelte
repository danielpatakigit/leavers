<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1 class="mt-24 text-center text-3xl font-bold">Data Input Page</h1>
<!-- <pre>{JSON.stringify(data, null, 2)}</pre> -->
<table class="min-w-full divide-y divide-gray-200">
	<thead class="bg-gray-50">
		{#each data.records as record, i}
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
		{#each data.records as record, i}
			<tr>
				{#each Object.values(record) as value}
					<td class="whitespace-nowrap px-6 py-4">{value}</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>
