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
		const user = record.expand.user;
		const deposit = payments.find(
			(payment) => payment.user === user.id && payment.type === "deposit",
		);
		const remainder = payments.find(
			(payment) => payment.user === user.id && payment.type === "remainder",
		);

		delete record.expand;
		Object.keys(user).forEach((key) => {
			record[key] = user[key];
		});

		if (deposit) {
			Object.keys(deposit).forEach((key) => {
				record["deposit_" + key] = deposit[key];
			});
		}

		if (remainder) {
			Object.keys(remainder).forEach((key) => {
				record["remainder_" + key] = remainder[key];
			});
		}

		// Object.keys(remainder).forEach((key) => {
		// 	record["remainder" + key] = remainder[key];
		// });

		// record.deposit = JSON.stringify(deposit);
		// record.remainder = JSON.stringify(remainder);
	});

	return { records };
}
