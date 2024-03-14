import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export function POST({ locals }) {
	locals.pb.authStore.clear();
	locals.user = undefined;
	throw redirect(303, "/login");
}
