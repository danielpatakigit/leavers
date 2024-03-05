import PocketBase from "pocketbase";
import { user } from "$lib/stores.js";

export const pb = new PocketBase("https://pb.leavers.hu");

// export async function updateFormStatus(recordId, status) {
// 	const data = {
// 		formSubmitted: status,
// 	};
// 	const userRecord = await pb
// 		.collection("users")
// 		.update(recordId, data);
// 	user.set(userRecord);
// }
