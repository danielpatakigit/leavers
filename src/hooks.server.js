import PocketBase from "pocketbase";
import { logoutUser, refreshUser } from "./lib/auth";
import { user } from "./lib/stores";
/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	event.locals.pb = new PocketBase("https://pb.leavers.hu");
	try {
		if (event.locals.pb.authStore.isValid) {
			await refreshUser();
		}
	} catch (_) {
		logoutUser();
	}
	const response = await resolve(event);
	return response;
}
