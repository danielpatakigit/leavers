<script>
	import Icon from "@iconify/svelte";
	import Title from "../../lib/components/Title.svelte";
	import { roles, days, sizes, meta } from "$lib";
	import { confetti } from "@neoconfetti/svelte";
	import Loader from "../../lib/components/Loader.svelte";
	import { slide } from "svelte/transition";

	export let form;

	let loading = false;
	$: loading = form?.success;

	let password = "";
	let passwordConfirm = "";

	let passwordMode = true;

	let passwordConfirmError = false;
	let passwordLenghtError = false;

	let selectedRole = null;
	let isTeamLeader = true;
	let wantsHoodie = false;
</script>

<svelte:head>
	<title>{meta["register"].title}</title>
	<meta name="description" content={meta["register"].description} />
	<meta name="keywords" content={meta["register"].keywords} />
</svelte:head>

<div class="mt-36"></div>

<section>
	<Title
		h1={true}
		id="organizers"
		tag="REGISTRATION"
		title="Are you ready?"
		subtitle="The Official Milestone Leavers' Camp 2024 Registration Form"
		backHref="/"
		backText="Home"
		forwardHref="/houserules"
		forwardText="House Rules"
	/>
</section>

<section class="mt-16">
	<form action="?/register" method="post">
		<div class="form-set" in:slide>
			<legend>Contact</legend>
			<div class="fields-container">
				<div class="split-fields">
					<label for="givenName">
						Given Name(s)
						<input required type="text" name="givenName" id="givenName" />
					</label>
					<label for="familyName">
						Family Name
						<input required type="text" name="familyName" id="familyName" />
					</label>
				</div>
				<label for="email">
					Email Address
					<input required type="email" name="email" id="email" />
				</label>
				<div class="split-fields">
					<label for="password">
						Password
						<input
							required
							minlength="8"
							maxlength="72"
							type={passwordMode ? "password" : "text"}
							name="password"
							id="password"
							style={passwordConfirmError || passwordLenghtError
								? "border-color: red"
								: ""}
							on:change={(e) => {
								password = e.currentTarget.value;
								if (passwordConfirm !== password) {
									passwordConfirmError = true;
								} else {
									passwordConfirmError = false;
								}

								if (password.length < 8) {
									passwordLenghtError = true;
								} else {
									passwordLenghtError = false;
								}
							}}
						/>
						{#if passwordLenghtError}
							<small>Must be at least 8 characters long.</small>
						{/if}
					</label>
					<label for="passwordConfirm">
						Confirm Passoword
						<input
							required
							type={passwordMode ? "password" : "text"}
							name="passwordConfirm"
							id="passwordConfirm"
							style={passwordConfirmError || passwordLenghtError
								? "border-color: red"
								: ""}
							on:change={(e) => {
								passwordConfirm = e.currentTarget.value;
								if (passwordConfirm !== password) {
									passwordConfirmError = true;
								} else {
									passwordConfirmError = false;
								}
							}}
						/>
						{#if passwordConfirmError}
							<small>Passwords do not match!</small>
						{/if}
					</label>
				</div>

				<button
					type="button"
					class="w-fit cursor-pointer rounded-lg border-2 border-zinc-600 px-2 py-1 text-left font-semibold text-zinc-600"
					on:click={() => (passwordMode = !passwordMode)}
				>
					{#if passwordMode}
						Show Password
					{:else}
						Hide Password
					{/if}
				</button>
				<small>
					Please remember this password. You'll need it later to access your
					registration details and infopackages.
				</small>
				<label for="phoneNumber">
					Phone Number
					<input required type="tel" name="phoneNumber" id="phoneNumber" />
				</label>
			</div>
		</div>
		<div class="form-set" in:slide>
			<legend>Billing</legend>
			<div class="fields-container">
				<div class="split-fields">
					<label for="country">
						Country
						<input required type="text" name="country" id="country" />
					</label>
				</div>
				<div class="split-fields">
					<label for="city">
						City
						<input required type="text" name="city" id="city" />
					</label>
					<label for="zip">
						ZIP
						<input required type="text" name="zip" id="zip" />
					</label>
				</div>
				<label for="streetAndHouseNumber">
					Street Name and House Number
					<input
						required
						type="text"
						name="streetAndHouseNumber"
						id="streetAndHouseNumber"
					/>
				</label>
			</div>
		</div>
		<div class="form-set" in:slide>
			<legend>Health</legend>
			<div class="fields-container">
				<label for="diet">
					Dietary Restrictions, Food allergies
					<small>Vegetarian, Vegan, Lactose, Insulin, Dairy, Gluten etc.</small>
					<input type="text" name="diet" id="diet" />
				</label>
				<label for="medical">
					Medical Conditions
					<small>
						If you think that it’s import for the organizers to know about any
						existing conditions please let them know.
					</small>
					<input type="text" name="medical" id="medical" />
				</label>
			</div>
		</div>
		<div class="mt-6 border-b-2 pb-8">
			<h2 class="mb-8 block text-balance text-center text-2xl font-semibold">
				Your current role in the Milestone community is:
			</h2>
			<fieldset class="checkbox-fields">
				{#each roles as role, i}
					<div class="checkbox-field">
						<input
							type="radio"
							name="role"
							value={role.value}
							id={role.value}
							on:change={(e) => {
								selectedRole = e.currentTarget.value;
							}}
						/>
						<label for={role.value}>
							<div class="icon">
								<Icon icon={role.icon}></Icon>
							</div>
							<span class="title">{role.label}</span>
							<span class="subtitle">
								{role.description}
							</span>
						</label>
					</div>
				{/each}
			</fieldset>
		</div>
		{#if selectedRole == "alumni"}
			<div class="form-set" in:slide>
				<legend>Team Leader</legend>
				<div class="fields-container">
					<h3>Would you like to be a team leader in MSLC24?</h3>
					<small>
						About being a team leader: during the Leavers' Camp, participants
						will be organized into teams led by Milestone alumni. Team leaders
						guide their teams through challenges, assist with mental preparation
						for university life, and form new bonds with the youngest Milestone
						leavers.
						<strong>
							Team leaders are required to be present throughout the entire camp
							(Jul. 31st - Aug. 4th)
						</strong>
					</small>

					<fieldset class="radio-fields">
						<label class="option-label" for="wantsTeamLeaderYes">
							<input
								checked
								type="radio"
								name="wantsTeamLeader"
								value="yes"
								id="wantsTeamLeaderYes"
								on:change={() => {
									isTeamLeader = true;
								}}
							/>
							Yes
						</label>

						<label class="option-label" for="wantsTeamLeaderNo">
							<input
								on:change={() => {
									isTeamLeader = false;
								}}
								type="radio"
								name="wantsTeamLeader"
								value="no"
								id="wantsTeamLeaderNo"
							/>
							No
						</label>
					</fieldset>
					{#if isTeamLeader}
						<label for="partnerTeamLeader" in:slide>
							If yes, who would you prefer as your team leader partner?
							<input
								type="text"
								name="partnerTeamLeader"
								id="partnerTeamLeader"
							/>
						</label>
					{/if}
				</div>
			</div>
		{/if}
		{#if selectedRole}
			{#if (selectedRole === "alumni" && !isTeamLeader) || selectedRole === "staff"}
				<div class="form-set" in:slide>
					<legend>Duration of Stay</legend>
					<div class="fields-container">
						<h3>Select the days you want to participate in the camp</h3>
						<small>
							The right to participate extends until the morning following the
							last day you selected. For instance, if you choose Wednesday and
							Thursday, we expect your presence for the entire two days and
							departure on Friday morning. Should we observe that you have
							stayed beyond your agreed duration, organizers reserve the right
							to charge you for the additional day and meals will also not be
							guaranteed for you.
						</small>
						<fieldset class="checkbox-fields">
							{#each days as day, i}
								{@const checked = i >= 2 ? "checked" : ""}
								<div class="checkbox-field">
									<input
										{checked}
										type="checkbox"
										name="durationOfStay"
										value={day.value}
										id={day.value}
									/>
									<label for={day.value} class="h-28">
										<span class="title">{day.label}</span>
										<span class="subtitle">
											{day.description}
										</span>
									</label>
								</div>
							{/each}
						</fieldset>
					</div>
				</div>
			{/if}
			<div class="form-set" in:slide>
				<legend>Milestone Hoodie</legend>
				<div class="fields-container">
					{#if selectedRole !== "leaver"}
						<h3>
							Would you like to add the Milestone hoodie to your registration?
						</h3>
						<small>
							A hoodie costs extra 8 000 Ft which would be issued with the
							remainder part of your base participation fee.
						</small>
						<fieldset class="radio-fields">
							<label class="option-label" for="wantsHoodieYes">
								<input
									type="radio"
									name="wantsHoodie"
									value="yes"
									id="wantsHoodieYes"
									on:change={() => {
										wantsHoodie = true;
									}}
								/>
								Yes
							</label>
							<label class="option-label" for="wantsHoodieNo">
								<input
									checked
									type="radio"
									name="wantsHoodie"
									value="no"
									id="wantsHoodieNo"
									on:change={() => {
										wantsHoodie = false;
									}}
								/>
								No
							</label>
						</fieldset>
					{/if}
					{#if wantsHoodie || selectedRole === "leaver"}
						<div class="field-container" in:slide>
							<h3>Please select your hoodie size:</h3>
							<fieldset class="checkbox-fields">
								{#each sizes as size, i}
									{@const checked = i === 2 ? "checked" : ""}
									<div class="checkbox-field">
										<input
											{checked}
											type="radio"
											name="hoodieSize"
											value={size}
											id={size}
										/>
										<label for={size}>
											<span class="title">{size}</span>
										</label>
									</div>
								{/each}
							</fieldset>
						</div>
					{/if}
				</div>
			</div>
			<div class="form-set" in:slide>
				<legend>Accomodation</legend>
				<div class="fields-container">
					<h3>Would you prefer to stay indoors or outdoors?</h3>
					<small>
						Please note that due to a limited number of indoor spaces,
						non-leavers may be asked to bring their own tent. However, leavers
						also have the option to choose to sleep in a tent thus also helping
						to free up indoor spaces for those who don't have one.
					</small>

					<fieldset class="radio-fields">
						<label class="option-label" for="accommodationTypeIndoors">
							<input
								checked
								type="radio"
								name="accommodationType"
								value="indoors"
								id="accommodationTypeIndoors"
							/>
							Indoors
						</label>

						<label class="option-label" for="accommodationTypeOutdoors">
							<input
								type="radio"
								name="accommodationType"
								value="outdoors"
								id="accommodationTypeOutdoors"
							/>
							Outdoors
						</label>
					</fieldset>
				</div>
			</div>
			{#if selectedRole !== "staff"}
				<div class="form-set" in:slide>
					<legend>University</legend>
					<div class="fields-container">
						<label for="university">
							Please specify the university you attended/attend/have chosen to
							attend after leaving Milestone:
							<small>
								By letting us know we can make sure that you provide and/or
								receive the most useful advice in the camp.
							</small>
							<input type="text" name="universtiy" id="university" />
						</label>
						<label for="course">
							Please specify the degree course you have selected:
							<input type="text" name="course" id="course" />
						</label>
					</div>
				</div>
			{/if}

			<div class="form-set" in:slide>
				<legend>Comment</legend>
				<div class="fields-container">
					<label for="comment">
						Anything to add?
						<input type="text" name="comment" id="comment" />
					</label>
				</div>
			</div>
			<div class="form-set" in:slide>
				<legend>Terms and Conditions</legend>
				<div class="fields-container">
					<h3>
						Do you understand and accept these points terms and conditions
						applied to your registration?
					</h3>
					<ol class="list-inside list-decimal text-xs font-normal *:mt-4">
						<li>
							The Institute (Milestone Consulting Kft.) handles my personal data
							in accordance with the current legislation and its own data
							handling policy made available on its website. I give my consent
							to the Institute contacting me about Leavers' Camp participation
							via email or phone. In addition, I give my consent that photos
							taken in the camp could be used for advertising matters in the
							future. The Institute's data handling policy is available at the
							following link:
							<a
								target="_blank"
								href="https://milestone-institute.org/milestone-institute-data-handling-policy/"
							>
								https://milestone-institute.org/milestone-institute-data-handling-policy/
							</a>
						</li>
						<li>
							The Institute (Milestone Consulting Kft.) would like to stay in
							touch with me after the Leavers' Camp, to foster its alumni
							community and to let me know about their events via newsletters.
							The Institute's data handling policy is available at the following
							link:
							<a
								target="_blank"
								href="https://milestone-institute.org/milestone-institute-data-handling-policy/"
							>
								https://milestone-institute.org/milestone-institute-data-handling-policy/
							</a>
							I can unsubscribe at any point.
						</li>
						<li>
							I have carefully examined and fully understand the procedure and
							structure regarding the issuance of registration fees. I hereby
							acknowledge my consent for the camp organizers to revoke my
							registration as per the policies stated on the camp website.
							Additionally, I have familiarized myself with and agree to abide
							by the <a target="_blank" href="/houserules" class="underline">
								house rules
							</a>
							applicable to all participants during the camp's duration.
						</li>
						<li>
							While the organizers prioritize providing a safe experience at the
							camp, I am ultimately responsible for my own health and safety
							during the event.
						</li>
					</ol>
					<div class="flex gap-4 *:cursor-pointer">
						<input
							required
							aria-labelledby="acceptsTermsAndConditions"
							type="checkbox"
							name="acceptsTermsAndConditions"
							id="acceptsTermsAndConditions"
						/>
						<label for="acceptsTermsAndConditions">
							I understand and accept
						</label>
					</div>
				</div>
			</div>
			{@const disabled = passwordConfirmError ? "disabled" : ""}
			<button
				{disabled}
				type="submit"
				class=" mt-4 w-full rounded-xl bg-gold-900 px-8 py-4 text-center text-lg font-bold text-white shadow-md hover:bg-gold-800"
				on:click={() => (loading = true)}
				in:slide
			>
				{#if loading}
					<Loader></Loader>
				{:else}
					<span>Register</span>
				{/if}
			</button>
		{/if}
	</form>
</section>

<style lang="postcss">
	.form-set {
		@apply mb-8 grid grid-cols-1 border-b-2 md:mb-0  md:grid-cols-[16rem,_1fr];
	}

	.split-fields {
		@apply grid grid-cols-1 gap-4 md:grid-cols-2;
	}

	.radio-fields {
		@apply flex gap-12;
	}

	.fields-container {
		@apply flex flex-col gap-4 pb-4 pt-4;
	}

	.option-label {
		@apply mt-2 flex cursor-pointer flex-row items-center gap-2 py-2 pr-4;
	}

	.checkbox-fields {
		@apply mt-2 flex flex-col justify-between gap-4 md:flex-row;
	}

	.checkbox-fields > .checkbox-field {
		@apply w-full;
	}

	.checkbox-field {
		/* @apply p-2; */
	}
	.checkbox-field input {
		@apply hidden;
	}
	.checkbox-field label {
		@apply flex cursor-pointer flex-col items-center justify-center rounded-2xl border-4 p-6 px-6 text-center text-xl transition-all hover:scale-95 hover:border-gold-400 hover:bg-gold-100 hover:opacity-100 active:scale-95;
	}

	.checkbox-field label .icon {
		@apply text-4xl text-gold-900;
	}
	.checkbox-field label .title {
		@apply text-xl font-bold;
	}
	.checkbox-field label .subtitle {
		@apply text-sm font-normal;
	}

	.checkbox-fields input:checked ~ label {
		@apply border-gold-900 bg-gold-300 font-bold opacity-100;
	}

	legend {
		@apply mr-4 block pr-4  pt-4 font-serif  text-2xl font-bold md:border-r-2;
	}

	label,
	h3 {
		@apply flex flex-col gap-1 font-semibold;
	}

	input {
		@apply rounded-lg border-2 border-zinc-200 p-2;
	}

	small {
		@apply font-normal;
	}

	a {
		@apply underline;
	}
</style>
