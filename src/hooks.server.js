import PocketBase from "pocketbase";

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	event.locals.pb = new PocketBase("https://pb.leavers.hu");
	// load the store data from the request cookie string
	event.locals.pb.authStore.loadFromCookie(
		event.request.headers.get("cookie") || "",
	);

	try {
		// get an up-to-date auth store state by verifying and refreshing the loaded auth model (if any)

		await event.locals.pb.collection("users").authRefresh();
	} catch (_) {
		// clear the auth store on failed refresh
		event.locals.pb.authStore.clear();
	}

	const response = await resolve(event);

	// send back the default 'pb_auth' cookie to the client with the latest store state
	// response.headers.append(
	// 	"set-cookie",
	// 	event.locals.pb.authStore.exportToCookie(),
	// );

	return response;
}

// event.locals.pb.authStore.loadFromCookie(
// 	event.request.headers.get("cookie") || "",
// );

// console.log(event.locals.pb.authStore);

// try {
// 	// Check if the user is authenticated
// 	if (event.locals.pb.authStore.isValid) {
// 		// Refresh the user's authentication
// 		await event.locals.pb.collection("users").authRefresh();

// 		// Set the user in the locals object
// 		event.locals.user = event.locals.pb.authStore.model;
// 	}
// } catch (err) {
// 	// Clear the authStore if there is an error
// 	event.locals.pb.authStore.clear();
// }

// // Set the cookie
// const isProd = process.env.NODE_ENV === "production" ? true : false;
// response.headers.set(
// 	"set-cookie",
// 	event.locals.pb.authStore.exportToCookie({
// 		secure: isProd,
// 		sameSite: "Lax",
// 	}),
// );
