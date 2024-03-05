<script>
	import Icon from "@iconify/svelte";
	import Title from "../../lib/components/Title.svelte";
	import { pb } from "$lib/pocketbase.js";
	import { updateUser, logoutUser } from "$lib/auth.js";
	import { user } from "$lib/stores.js";
	import Link from "../../lib/components/Link.svelte";
	export let data;

	async function loginWithGoogle() {
		try {
			let authData = await pb
				.collection("users")
				.authWithOAuth2({ provider: "google" });
			console.log(authData);
			const record = authData.record;
			record.avatarURL = authData.meta.avatarUrl;
			record.name = authData.meta.name;
			record.family_name = authData.meta.rawUser.family_name;
			record.given_name = authData.meta.rawUser.given_name;
			// record.formSubmitted = false;
			await updateUser(record.id, record);
		} catch (err) {
			console.error(err);
		}
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
	<div class="rounded-lg border-4 border-gold-800 bg-gold-100 p-8">
		<hgroup class="flex justify-between text-lg font-bold">
			<h3 class="">Step 1. - Sign in with Google</h3>
			<div
				class="{$user
					? 'border-green-600 bg-green-200 text-green-600'
					: 'border-red-600 bg-red-200 text-red-600'} h-fit rounded-lg border-2 px-4 py-1"
			>
				{#if $user}
					Complete
				{:else}
					To-do
				{/if}
			</div>
		</hgroup>
		<div class="mt-4">
			<p>
				Sign in with your Google account to confirm your identity.
				After logging in your will receive your personal registration
				ID which you will have to use in the Google Form from step 2.
			</p>
			<div class="mt-10 grid grid-cols-1 gap-4">
				<div class="flex flex-col items-center gap-2">
					{#if $user}
						<span class="font-bold">Currently logged in as:</span>
						<img
							class="aspect-square w-14"
							src={$user.avatarURL}
							alt=""
						/>
						<span class="font-bold">{$user.name}</span>
						<span class="">{$user.email}</span>
					{/if}
				</div>
				<div class="flex flex-col items-center gap-4">
					{#if !$user}
						<button
							on:click={loginWithGoogle}
							class="flex w-fit items-center gap-3 rounded-lg bg-blue-600 px-4 py-2 text-xl font-semibold text-white shadow-md transition-all hover:opacity-90"
						>
							<Icon icon="mdi:google"></Icon>
							<span class="border-l-2 pl-4">Sign with Google</span>
						</button>
					{:else}
						<button
							on:click={logoutUser}
							class="mt-6 flex w-fit items-center gap-3 rounded-lg bg-zinc-600 px-4 py-2 text-xl font-semibold text-white shadow-md transition-all hover:opacity-90"
						>
							<Icon icon="mdi:exit-to-app"></Icon>

							<span>Logout</span>
						</button>
					{/if}
				</div>
			</div>
		</div>
	</div>
</section>
<section>
	<div
		class="{$user
			? ''
			: 'pointer-events-none opacity-30'} rounded-lg border-4 border-gold-800 bg-gold-100 p-8"
	>
		<hgroup class="flex justify-between text-lg font-bold">
			<h3 class="">Step 2. - Fill out Google Form</h3>

			<!-- <div
				class="{$user.formSubmitted
					? 'border-green-600 bg-green-200 text-green-600'
					: 'border-red-600 bg-red-200 text-red-600'} flex h-fit gap-2 rounded-lg border-2 px-4 py-1"
			>
				<label for="formSubmitted">Form Filled Out?</label>
				<input
					checked={$user.formSubmitted}
					on:click={() => {}}
					type="checkbox"
					name=""
					id="formSubmitted"
					class=""
				/>
			</div> -->
		</hgroup>

		<div class="mt-4">
			<p>
				The final step of the registration process is to fill out the
				Google Form below. Before clicking on the link make sure to
				<strong>copy your registration ID</strong>
				to your clipboard as this will be the first field you will have
				to fill out on the form.
			</p>
			<p class="mt-4">
				Note that this is a private registration ID. Make sure that
				you <strong>never share it with anybody.</strong>
			</p>
		</div>
		<div class="flex flex-col items-center">
			{#if $user}
				<button
					on:click={() => {
						navigator.clipboard.writeText($user.id);
					}}
					class="mt-6 flex items-center gap-2 rounded-md border-2 border-zinc-600 bg-white px-4 py-2 transition-opacity hover:opacity-80"
				>
					<span>{$user.id}</span>
					<Icon icon="mdi:content-copy"></Icon>
				</button>
			{/if}
			<div class="mt-4">
				<Link
					href="https://docs.google.com/forms/d/e/1FAIpQLSdtphDkIxh4sdhpS-f74qEaBVAAkmcRdFaDjnzNmJ5j0eq-zA/viewform?usp=sf_link"
					icon="mdi:form"
					text="Open Google Form"
					hot={true}
				/>
			</div>
		</div>
	</div>
</section>
