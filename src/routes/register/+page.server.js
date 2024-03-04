/** @type {import('./$types').PageServerLoad} */
export const load = async ({ locals, url }) => {
	return;
	// // Get all the auth providers
	// const authMethods = await locals.pb
	// 	?.collection("users")
	// 	.listAuthMethods();
	// if (!authMethods) {
	// 	return {
	// 		authProviderRedirect: "",
	// 		authProviderState: "",
	// 	};
	// }
	// // Get the first auth provider (Google)
	// const redirectURL = `${url.origin}/auth/callback`;
	// const googleAuthProvider = authMethods.authProviders[0];
	// // Set the auth provider redirect URL and state
	// const authProviderRedirect = `${googleAuthProvider.authUrl}${redirectURL}`;
	// const state = googleAuthProvider.state;
	// // Return the auth provider redirect URL and state
	// return {
	// 	authProviderRedirect: authProviderRedirect,
	// 	authProviderState: state,
	// };
};
