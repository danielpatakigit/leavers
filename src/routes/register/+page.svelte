<script>
	import Icon from "@iconify/svelte";
	import Title from "../../lib/components/Title.svelte";
	import { browser } from "$app/environment";
	import PocketBase from "pocketbase";

	const pb = new PocketBase("https://pb.leavers.hu");

	export let data;

	async function loginWithGoogle() {
		try {
			const authData = await pb
				.collection("users")
				.authWithOAuth2({ provider: "google" });
			console.log(authData);
			// after the above you can also access the auth data from the authStore
			console.log(pb.authStore);
			console.log(pb.authStore.isValid);
			console.log(pb.authStore.token);
			console.log(pb.authStore.model.id);
		} catch (err) {
			console.error(err);
		}
	}

	function logoutUser() {
		pb.authStore.clear();
	}
	async function deleteUser() {
		await pb.collection("users").delete(pb.authStore.model.id);
		pb.authStore.clear();
	}

	// async function unlinkFromGoogle() {
	// 	await pb
	// 		.collection("users")
	// 		.unlinkExternalAuth(pb.authStore.model.id, "google");
	// 	// pb.authStore.clear();
	// }
</script>

<div class="mt-36"></div>
<section class="">
	<Title
		h1={true}
		id="organizers"
		tag="THE ORGANIZING TEAM"
		title="Meet Our Dedicated Organizers"
		subtitle="Passionate Milestone Alumni Leading the Way"
		backHref="/"
		backText="Home"
		forwardHref="/houserules"
		forwardText="House Rules"
	></Title>
</section>

<section class="">
	<div class="rounded-lg border-2 border-zinc-600 bg-zinc-100 p-8">
		<hgroup class="flex justify-between text-lg font-bold">
			<h3 class="">Step 1. - Sign in with Google</h3>
			<div class="">Missing/Done</div>
		</hgroup>
		<div class="mt-4">
			<p>
				Sign in with your Google account to confirm your identity.
				After logging in your will receive your personal registration
				ID which you will have to use in the Google Form from step 2.
			</p>
			<!-- <form
				action="?/google"
				method="post"
			> -->
			<button
				on:click={loginWithGoogle}
				class="flex items-center gap-3 bg-blue-600 px-4 py-2 text-xl font-semibold text-white shadow-md"
			>
				<Icon icon="mdi:google"></Icon>
				<span class="">Sign with Google</span>
			</button>

			<button
				on:click={logoutUser}
				class="flex items-center gap-3 bg-zinc-600 px-4 py-2 text-xl font-semibold text-white shadow-md"
			>
				<span>Logout</span>
			</button>
			<button
				on:click={deleteUser}
				class="flex items-center gap-3 bg-zinc-600 px-4 py-2 text-xl font-semibold text-white shadow-md"
			>
				<span>Delete</span>
			</button>

			<!-- </form> -->
		</div>
	</div>
</section>

<section>
	<pre>
		{JSON.stringify(pb.authStore.model, null, 2)}
	</pre>
</section>
