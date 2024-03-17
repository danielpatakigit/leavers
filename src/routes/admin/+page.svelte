<!-- <script>

</script>

<section class="mt-36">
	<h1 class="text-xl font-bold">Admin Page</h1>
</section>

<section>
	<table>
		<thead>
			<tr>
				<th>Select</th>
				<th>User Name</th>
				<th>Role</th>
				<th>Payment Type</th>
				<th>Amount (Ft)</th>
				<th>Registration Date</th>
				<th>Issue Date</th>
				<th>Payment Date</th>
			</tr>
		</thead>
		<tbody>
			{#each data.payments as payment, index}
				<tr>
					<td>
						<input
							type="checkbox"
							bind:checked={}
							value={payment.id}
						/>
					</td>
					<td>{payment.expand.user.name}</td>
					<td>{payment.expand.user.role}</td>
					<td>{payment.type}</td>
					<td>{payment.amount.toLocaleString("hu-HU")}</td>
					<td>
						{payment.created
							? new Date(payment.created).toLocaleDateString("hu-HU")
							: "-"}
					</td>
					<td>
						{payment.issued
							? new Date(payment.issued).toLocaleDateString("hu-HU")
							: "-"}
					</td>
					<td>
						{payment.payed
							? new Date(payment.payed).toLocaleDateString("hu-HU")
							: "-"}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>

	<div class="mt-4">
		<button on:click={() => updateSelectedRecords("issued")}>
			Autofill Issued Date
		</button>
		<button on:click={() => updateSelectedRecords("payed")}>
			Autofill Payed Date
		</button>
		<button on:click={() => (issuedDate = "")}>Clear Issued Date</button>
		<button on:click={() => (payedDate = "")}>Clear Payed Date</button>
	</div>
</section> -->
