/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	if (!locals.pb.authStore.isValid) {
		throw redirect(303, "/");
	}

	try {
		return {
			payments: queryPayments(locals),
			submissions: querySubmissions(locals),
		};
	} catch (error) {
		console.error("Error fetching records:", error);
	}
}

async function queryPayments(locals) {
	// Fetch payments records
	const paymentsResult = await locals.pb.collection("payments").getList(1, 10, {
		filter: `user="${locals.user.id}"`,
	});
	console.log(paymentsResult);
	return paymentsResult.items;
}

async function querySubmissions(locals) {
	// Fetch submissions records
	const submissionsResult = await locals.pb
		.collection("submissions")
		.getList(1, 10, {
			filter: `user="${locals.user.id}"`,
		});

	return submissionsResult.items;
}
