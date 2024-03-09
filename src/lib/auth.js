import { pb } from "./pocketbase.js";
import { user } from "./stores.js";

// only use on client
export function logoutUser() {
	if (confirm("Are you sure that you want to log out?")) {
		pb.authStore.clear();
		user.set(null);
	}
}

export async function updateUser(recordId, record) {
	const userRecord = await pb
		.collection("users")
		.update(recordId, record);
	user.set(userRecord);
}

export async function refreshUser() {
	const userRecord = await pb.collection("users").authRefresh();
	user.set(userRecord);
}
