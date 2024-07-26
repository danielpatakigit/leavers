/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	const records = await locals.pb.collection("submissions").getFullList({
		sort: "-created",
		expand: "user",
	});

	const payments = await locals.pb.collection("payments").getFullList({
		sort: "-created",
	});

	records.forEach((record) => {
		const user = record.expand.user || {}; // Handle case where user might be undefined
		const deposit =
			payments.find(
				(payment) => payment.user === user.id && payment.type === "deposit",
			) || {}; // Default to empty object if no match

		const remainder =
			payments.find(
				(payment) => payment.user === user.id && payment.type === "remainder",
			) || {}; // Default to empty object if no match

		delete record.expand; // Remove the expand property

		// Merge user data into record
		Object.keys(user).forEach((key) => {
			record[key] = user[key];
		});

		// Ensure deposit keys are present in the record, with default values
		const depositKeys = [
			"amount",
			"collectionId",
			"collectionName",
			"created",
			"extraHoodieIncluded",
			"id",
			"issued",
			"payed",
			"type",
			"updated",
			"user",
		];
		depositKeys.forEach((key) => {
			record["deposit_" + key] = deposit[key] || "";
		});

		// Ensure remainder keys are present in the record, with default values
		const remainderKeys = [
			"amount",
			"collectionId",
			"collectionName",
			"created",
			"extraHoodieIncluded",
			"id",
			"issued",
			"payed",
			"type",
			"updated",
			"user",
		];
		remainderKeys.forEach((key) => {
			record["remainder_" + key] = remainder[key] || "";
		});
	});

	return { records };
}
