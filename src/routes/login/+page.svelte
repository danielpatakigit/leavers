<script>
	import { slide } from "svelte/transition";
	import Loader from "../../lib/components/Loader.svelte";
	import Title from "../../lib/components/Title.svelte";

	// /** @type {import('./$types').PageData} */
	// export let data;
	export let form;

	let loading;
</script>

<div class="mt-36"></div>

<section>
	<Title
		h1={true}
		id="login"
		tag="MY personal REGISTRATION"
		title="Already Registered?"
		subtitle="If you have already submitted your registration you can log in here with your email and password and track it's status. Your personalised infopackages will also be accessible here."
		backHref=""
		backText=""
		forwardHref=""
		forwardText=""
	/>
</section>
<section
	class="mt-10 max-w-md rounded-lg border-4 border-gold-900 bg-gold-100 px-6 py-7 shadow-md"
>
	<h2 class=" text-center text-2xl font-bold">Login</h2>
	<form action="?/login" method="post" class="mt-6">
		<div class="mb-4">
			<label for="email">
				Email:
				<input type="email" id="email" name="email" required />
			</label>
		</div>

		<div class="mb-6">
			<label for="password">
				Password:
				<input type="password" id="password" name="password" required />
			</label>
			<!-- <a
				href="#"
				class="inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800"
			>
				Forgot Password?
			</a> -->
		</div>
		{#if form?.error}
			<div
				class="rounded-xl border-4 border-red-600 bg-red-100 p-4 font-bold"
				in:slide
			>
				Wrong email address or password!
			</div>
		{/if}
		<button
			type="submit"
			class=" mt-6 w-full rounded-lg bg-gold-900 px-4 py-2 font-bold text-white hover:bg-gold-800 focus:outline-none"
		>
			{#if loading}
				<Loader></Loader>
			{:else}
				Login
			{/if}
		</button>
	</form>
</section>

<style lang="postcss">
	label {
		@apply flex flex-col gap-1 font-bold;
	}

	input {
		@apply rounded-lg border-2 border-zinc-200 p-2;
	}
</style>
