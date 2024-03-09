import { fail } from "@sveltejs/kit";
import { pb } from "$lib/pocketbase";

/** @type {import('./$types').Actions} */
export const actions = {
	register: async (event) => {
		try {
			const f = await event.request.formData();
			// Create a new user in the Users collection
			const userData = {
				username: null,
				email: f.get("email"),
				emailVisibility: true,
				password: f.get("password"),
				passwordConfirm: f.get("passwordConfirm"),
				name: `${f.get("givenName")} ${f.get("familyName")}`,
				avatarURL: null,
				familyName: f.get("familyName"),
				givenName: f.get("givenName"),
			};
			const newUser = await pb.collection("users").create(userData);

			// Save the submission of this User
			const submissionData = {
				user: newUser.id,
				phoneNumber: f.get("phoneNumber"),
				diet: f.get("diet"),
				medical: f.get("medical"),
				country: f.get("country"),
				city: f.get("city"),
				zip: f.get("zip"),
				streetAndHouseNumber: f.get("streetAndHouseNumber"),
				role: f.get("role"),
				wantsTeamLeader: f.get("wantsTeamLeader") === "yes" ? true : false, //bool
				partnerTeamLeader: f.get("partnerTeamLeader") === "yes" ? true : false, // bool
				durationOfStay: f.getAll("durationOfStay"), // array
				wantsHoodie: f.get("wantsHoodie") === "yes" ? true : false, // bool
				hoodieSize: f.get("hoodieSize"),
				accommodationType: f.get("accommodationType"),
				university: f.get("university"),
				course: f.get("course"),
				acceptsTermsAndConditions:
					f.get("acceptsTermsAndConditions") === "on" ? true : false, // bool
				comment: f.get("comment"),
			};

			const submission = await pb
				.collection("submissions")
				.create(submissionData);

			return { success: true, submission, newUser };
		} catch (error) {
			console.log(error);
			return fail(500, {
				message: "Something went wrong. Please try again later.",
				error: error,
			});
		}
	},
};
