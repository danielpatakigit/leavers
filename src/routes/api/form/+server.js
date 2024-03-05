import { json } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const req = await request.json();
	console.log(req);
	return { status: 200, body: { message: "Alles gut." } };
}
