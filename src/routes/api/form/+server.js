import { json } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	console.log(request.json());
	return { status: 200, body: { message: "Alles gut." } };
}
