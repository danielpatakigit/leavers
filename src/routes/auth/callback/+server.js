// import { redirect } from "@sveltejs/kit";

// // Define the GET request handler
// export const GET = async ({ locals, url, cookies }) => {
// 	// Set the redirect URL and expected state
// 	const redirectURL = `${url.origin}/auth/callback`;
// 	const expectedState = cookies.get("state");

// 	// Get the state and code from the query parameters
// 	const query = new URLSearchParams(url.search);
// 	const state = query.get("state");
// 	const code = query.get("code");

// 	// Get the authentication providers
// 	const authMethods = await locals.pb
// 		?.collection("users")
// 		.listAuthMethods();

// 	// If there are no authentication providers, redirect to the register page
// 	if (!authMethods?.authProviders) {
// 		console.log("No auth providers.");
// 		throw redirect(303, "/register");
// 	}

// 	// Get the first authentication provider (which is Google)
// 	const provider = authMethods.authProviders[0];

// 	// If there is no authentication provider, redirect to the register page
// 	if (!provider) {
// 		console.log("Provider not found.");
// 		throw redirect(303, "/register");
// 	}

// 	// If the expected state does not match the state from the query parameters, redirect to the login page
// 	if (expectedState !== state) {
// 		console.log(
// 			"State does not match expected.",
// 			expectedState,
// 			state,
// 		);
// 		throw redirect(303, "/register");
// 	}

// 	// Authenticate the user with OAuth2
// 	try {
// 		await locals.pb
// 			?.collection("users")
// 			.authWithOAuth2(
// 				provider.name,
// 				code || "",
// 				provider.codeVerifier,
// 				redirectURL,
// 			);
// 	} catch (err) {
// 		console.log("Error logging in with 0Auth user.", err);
// 	}

// 	// Redirect to the home page
// 	throw redirect(303, "/register");
// };
