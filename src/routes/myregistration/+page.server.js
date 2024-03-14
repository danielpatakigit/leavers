/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	if (!locals.pb.authStore.isValid) {
		throw redirect(303, "/");
	}

	try {
		// Fetch payments records
		const paymentsResult = await locals.pb
			.collection("payments")
			.getList(1, 10, {
				filter: `user="${locals.user.id}"`,
			});

		// Fetch submissions records
		const submissionsResult = await locals.pb
			.collection("submissions")
			.getList(1, 10, {
				filter: `user="${locals.user.id}"`,
			});

		const payments = paymentsResult.items;
		const submissions = submissionsResult.items;
		return { payments, submissions };
	} catch (error) {
		console.error("Error fetching records:", error);
	}
}
