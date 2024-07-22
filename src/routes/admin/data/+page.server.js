/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	const records = await locals.pb.collection("submissions").getFullList({
		sort: "-created",
		expand: "user",
	});

	records.forEach((record) => {
		const user = record.expand.user;

		delete record.expand;
		Object.keys(user).forEach((key) => {
			record[key] = user[key];
		});
	});

	return { records };
}
