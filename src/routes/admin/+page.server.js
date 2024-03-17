import { redirect } from "@sveltejs/kit";

// Call the expandPaymentsWithSubmissions function in the load function
export async function load({ locals }) {
	if (!locals?.pb?.authStore?.isValid && !locals?.user?.admin) {
		throw redirect(303, "/");
	}

	const payments = await locals.pb.collection("payments").getFullList({
		sort: "-created",
		expand: "user",
	});

	const submissions = await locals.pb.collection("submissions").getFullList({
		sort: "-created",
	});

	const expandedPayments = expandPaymentsWithSubmissions(payments, submissions);

	console.log(expandedPayments);
	return { payments: expandedPayments };
}

// Expand payments array with corresponding data from submissions array
function expandPaymentsWithSubmissions(payments, submissions) {
	// Create a map to store submissions data indexed by user id
	const submissionsMap = new Map();
	submissions.forEach((submission) => {
		submissionsMap.set(submission.user, submission);
	});

	// Iterate through payments and add submissions data if found
	const expandedPayments = payments.map((payment) => {
		const submissionData = submissionsMap.get(payment.user);
		return { ...payment, ...submissionData };
	});

	return expandedPayments;
}
