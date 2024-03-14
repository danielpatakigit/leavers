import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	if (locals.pb.authStore.isValid) {
		throw redirect(303, "/");
	}
}

/** @type {import('./$types').Actions} */
export const actions = {
	login: async ({ request, locals }) => {
		const formData = await request.formData();
		const email = formData.get("email");
		const password = formData.get("password");

		try {
			const user = await locals.pb
				.collection("users")
				.authWithPassword(email, password);
		} catch (error) {
			console.log(error);
			return {
				error: true,
				email: email,
			};
		}
		throw redirect(303, "/myregistration");
	},
};
