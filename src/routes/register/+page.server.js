import { fail, redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	// if (locals.pb.authStore.isValid) {
	// 	throw redirect(303, "/");
	// }

	if (!locals?.pb?.authStore?.isValid && !locals?.user?.admin) {
		throw redirect(303, "/");
	}
}

/** @type {import('./$types').Actions} */
export const actions = {
	register: async ({ locals, request }) => {
		try {
			const f = await request.formData();

			// Extract values from the form
			const email = f.get("email");
			const password = f.get("password");
			const passwordConfirm = f.get("passwordConfirm");
			const givenName = f.get("givenName");
			const familyName = f.get("familyName");
			const phoneNumber = f.get("phoneNumber");
			const diet = f.get("diet");
			const medical = f.get("medical");
			const country = f.get("country");
			const city = f.get("city");
			const zip = f.get("zip");
			const streetAndHouseNumber = f.get("streetAndHouseNumber");
			const role = f.get("role");
			const wantsTeamLeader = f.get("wantsTeamLeader") === "yes";
			const partnerTeamLeader = f.get("partnerTeamLeader");
			const durationOfStay = f.getAll("durationOfStay");
			const wantsHoodie = f.get("wantsHoodie") === "yes";
			const hoodieSize = f.get("hoodieSize");
			const accommodationType = f.get("accommodationType");
			const university = f.get("university");
			const course = f.get("course");
			const acceptsTermsAndConditions =
				f.get("acceptsTermsAndConditions") === "on";
			const comment = f.get("comment");

			// Create a new user in the Users collection
			const userData = {
				username: null,
				email,
				emailVisibility: true,
				password,
				passwordConfirm,
				name: `${givenName} ${familyName}`,
				admin: false,
				familyName,
				givenName,
				role,
			};
			const newUser = await locals.pb.collection("users").create(userData);

			// Save the submission of this User
			const submissionData = {
				user: newUser.id,
				phoneNumber,
				diet,
				medical,
				country,
				city,
				zip,
				streetAndHouseNumber,
				wantsTeamLeader,
				partnerTeamLeader,
				durationOfStay:
					durationOfStay === null || durationOfStay.length <= 0
						? ["Wednesday", "Thursday", "Friday", "Saturday"]
						: durationOfStay,
				wantsHoodie,
				hoodieSize,
				accommodationType,
				university,
				course,
				acceptsTermsAndConditions,
				comment,
			};

			const submission = await locals.pb
				.collection("submissions")
				.create(submissionData);

			// Create Payment records for deposit and remainder
			let full = 0;
			let deposit = 0;
			let remainder = 0;
			let extraHoodieIncluded = false;

			switch (role) {
				case "leaver": {
					deposit = 20000;
					remainder = 40000;
					break;
				}
				case "alumni": {
					if (wantsTeamLeader) {
						deposit = 25000;
						remainder = 25000;
					} else {
						full = 15000 * durationOfStay.length;
						deposit = remainder = full / 2;
					}

					if (wantsHoodie) {
						extraHoodieIncluded = true;
						remainder += 8000;
					}
					break;
				}
				case "staff": {
					full = 15000 * durationOfStay.length;
					deposit = remainder = full / 2;

					if (wantsHoodie) {
						extraHoodieIncluded = true;
						remainder += 8000;
					}
					break;
				}
			}

			const depositData = {
				user: newUser.id,
				type: "deposit",
				amount: deposit,
				extraHoodieIncluded: false,
				issued: null,
				payed: null,
			};

			const remainderData = {
				user: newUser.id,
				type: "remainder",
				amount: remainder,
				extraHoodieIncluded,
				issued: null,
				payed: null,
			};

			const depositRecord = await locals.pb
				.collection("payments")
				.create(depositData);

			const remainderRecord = await locals.pb
				.collection("payments")
				.create(remainderData);

			// Log in the newly created user
			const user = await locals.pb
				.collection("users")
				.authWithPassword(newUser.email, password);
		} catch (error) {
			console.log(error);
			return fail(500, {
				message: "Something went wrong. Please try again later.",
				error: JSON.stringify(error),
			});
		}

		throw redirect(303, "/myregistration");
	},
};
