import PocketBase from "pocketbase";

export const handle = async ({ event, resolve }) => {
	event.locals.pb = new PocketBase("https://pb.leavers.hu");
	event.locals.pb.authStore.loadFromCookie(
		event.request.headers.get("cookie") || "",
	);

	if (event.locals.pb.authStore.isValid) {
		event.locals.user = event.locals.pb.authStore.model;
	}

	const response = await resolve(event);
	response.headers.set(
		"set-cookie",
		event.locals.pb.authStore.exportToCookie({ secure: false }),
	);

	return response;
};
