<script>
	import Icon from "@iconify/svelte";
	import Title from "../../lib/components/Title.svelte";
	import { pb } from "$lib/pocketbase.js";
	import { updateUser, logoutUser } from "$lib/auth.js";
	import { user } from "$lib/stores.js";
	import Link from "../../lib/components/Link.svelte";
	export let data;
	export let form;

	let roles = [
		{
			value: "leaver",
			label: "Leaver",
			description: "Graduating MS Senior",
			icon: "solar:diploma-bold-duotone",
		},
		{
			value: "alumni",
			label: "Alumni",
			description: "MS Graduate",
			icon: "solar:square-academic-cap-2-bold",
		},
		{
			value: "staff",
			label: "Staff/Faculty",
			description: "MS Staff/Faculty Member",
			icon: "solar:tea-cup-bold-duotone",
		},
	];
	let days = [
		{
			value: "Wednesday",
			label: "Wed",
			description: "Jul. 31.",
		},
		{
			value: "Thursday",
			label: "Thu",
			description: "Aug. 1.",
		},
		{
			value: "Friday",
			label: "Fri",
			description: "Aug. 2.",
		},
		{
			value: "Saturday",
			label: "Sat",
			description: "Aug. 3.",
		},
	];

	let sizes = ["S", "M", "L", "XL"];

	let selectedRole = null;
	let isTeamLeader = true;
	let wantsHoodie = false;
</script>

<div class="mt-36"></div>
<section class="">
	<Title
		h1={true}
		id="organizers"
		tag="REGISTRATION"
		title="Are you ready?"
		subtitle="The Offical Milestone Leavers' Camp 2024 Registration Form"
		backHref="/"
		backText="Home"
		forwardHref="/houserules"
		forwardText="House Rules"
	></Title>
</section>

<section class="mt-16">
	<form
		action=""
		method="post"
	>
		<div class="set">
			<legend>Contact</legend>
			<div class="container">
				<div class="split">
					<label for="givenName">
						Given Name(s)
						<input
							type="text"
							name="givenName"
							id="givenName"
						/>
					</label>
					<label for="familyName">
						Family Name
						<input
							type="text"
							name="familyName"
							id="familyName"
						/>
					</label>
				</div>
				<label for="email">
					Email Address
					<input
						type="email"
						name="email"
						id="email"
					/>
				</label>
				<div class="split">
					<label for="password">
						Password
						<input
							type="password"
							name="password"
							id="password"
						/>
					</label>
					<label for="passwordConfirm">
						Confirm Passoword
						<input
							type="password"
							name="passwordConfirm"
							id="passwordConfirm"
						/>
					</label>
				</div>
				<span class="">
					With your email address and this password you'll be able to
					log back in later and check on the status of your
					registration.
				</span>
				<label for="phone">
					Phone Number
					<input
						type="tel"
						name="phone"
						id="phone"
					/>
				</label>
			</div>
		</div>
		<div class="set">
			<legend>Billing</legend>
			<div class="container">
				<div class="split">
					<label for="country">
						Country
						<input
							type="text"
							name="country"
							id="country"
						/>
					</label>
				</div>
				<div class="split">
					<label for="city">
						City
						<input
							type="text"
							name="city"
							id="city"
						/>
					</label>
					<label for="zip">
						ZIP
						<input
							type="text"
							name="zip"
							id="zip"
						/>
					</label>
				</div>
				<label for="streetAndHouseNumber">
					Street Name and House Number
					<input
						type="text"
						name="streetAndHouseNumber"
						id="streetAndHouseNumber"
					/>
				</label>
			</div>
		</div>
		<div class="set">
			<legend>Health</legend>
			<div class="container">
				<label for="diet">
					Dietary Restrictions, Food allergies
					<span>
						Vegetarian, Vegan, Lactose, Insulin, Dairy, Gluten etc.
					</span>
					<input
						type="text"
						name="diet"
						id="diet"
					/>
				</label>
				<label for="medical">
					Medical Conditions
					<span>
						If you think that it’s import for the organizers to know
						about any existing conditions please them know.
					</span>
					<input
						type="text"
						name="medical"
						id="medical"
					/>
				</label>
			</div>
		</div>
		<div class="mt-6 border-b-2 pb-8">
			<span class="text-xl font-semibold">
				You wish to participate in the camp as:
			</span>
			<fieldset class="mt-2 flex flex-col gap-4 md:flex-row">
				{#each roles as role, i}
					<div class="w-full">
						<input
							checked={role === "leaver"}
							type="radio"
							name="role"
							value={role.value}
							id={role.value}
							class="peer hidden"
							on:change={(e) => {
								selectedRole = e.currentTarget.value;
							}}
						/>

						<label
							for={role.value}
							class="checkbox-label md:48 py-12"
						>
							<div class="">
								<Icon
									class="text-4xl text-gold-900"
									icon={role.icon}
								></Icon>
							</div>
							{role.label}
							<span class="text-balance pt-2 text-sm">
								{role.description}
							</span>
						</label>
					</div>
				{/each}
			</fieldset>
		</div>
		{#if selectedRole == "alumni"}
			<div class="set">
				<legend>Team Leader</legend>
				<div class="container">
					<h6>
						Would you like to be a team leader in MSLC24?
						<span>
							<strong>About being a team leader:</strong>
							during the Leavers' Camp, participants will be organized
							into teams led by Milestone alumni. Team leaders guide their
							teams through challenges, assist with mental preparation
							for university life, and form new bonds with the youngest
							Milestone leavers.
							<strong>
								Team leaders are required to be present throughout the
								entire camp (Jul. 31. - Aug. 4.)
							</strong>
							and are advised to travel with the leaver group to and from
							the camp. Additionally, team leaders also get a slight discount.
						</span>
						<fieldset class="radio-set">
							<label
								class="option-label"
								for="wantsTeamLeaderYes"
							>
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

							<label
								class="option-label"
								for="wantsTeamLeaderNo"
							>
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
					</h6>
					{#if isTeamLeader}
						<label for="partnerTeamLeader">
							If yes, who would you prefer as your team leader
							partner?

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
				<div class="set">
					<legend class="text-xl font-semibold">
						Duration of Stay
					</legend>

					<div class="container">
						<h6>
							Choose the days you want to participate in the camp
						</h6>
						<fieldset class="flex flex-col gap-4 md:flex-row">
							{#each days as day, i}
								<div class=" w-full">
									<input
										type="checkbox"
										name="role"
										value={day.value}
										id={day.value}
										class="peer hidden"
									/>
									<label
										for={day.value}
										class="checkbox-label h-28"
									>
										{day.label}
										<span class="text-balance pt-2 text-sm">
											{day.description}
										</span>
									</label>
								</div>
							{/each}
						</fieldset>
					</div>
				</div>
			{/if}
			<div class="set">
				<legend>Official Milestone Hoodie</legend>
				<div class="container">
					{#if selectedRole !== "leaver"}
						<h6>
							Would you like to add the Milestone hoodie to your
							registration?
							<span>
								A hoodie costs extra 8.000 Ft which we will be added
								to the remainder part of your participation fee.
							</span>
							<fieldset class="radio-set">
								<label
									class="option-label"
									for="wantsHoodieYes"
								>
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

								<label
									class="option-label"
									for="wantsHoodieNo"
								>
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
						</h6>
					{/if}
					{#if wantsHoodie || selectedRole === "leaver"}
						<h6>Please select your hoodie size:</h6>
						<fieldset class="flex flex-col gap-4 md:flex-row">
							{#each sizes as size, i}
								<div class=" w-full">
									<input
										type="radio"
										name="hoodieSize"
										value={size}
										id={size}
										class="peer hidden"
									/>
									<label
										for={size}
										class="checkbox-label h-28"
									>
										{size}
									</label>
								</div>
							{/each}
						</fieldset>
					{/if}
				</div>
			</div>
			<div class="set">
				<legend>Accomodation</legend>
				<div class="container">
					<h6>
						Would you prefer to stay indoors or outdoors?
						<span>
							Please note that due to a limited number of indoor
							spaces, non-leavers may be asked to bring their own
							tent. However, leavers also have the option to choose to
							sleep in a tent thus also helping to free up indoor
							spaces for those who don't have one.
						</span>
					</h6>
					<fieldset class="radio-set">
						<label
							class="option-label"
							for="accommodationTypeIndoors"
						>
							<input
								checked
								type="radio"
								name="accommodationType"
								value="indoors"
								id="accommodationTypeIndoors"
							/>
							Indoors
						</label>

						<label
							class="option-label"
							for="accommodationTypeOutdoors"
						>
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

			<div class="set">
				<legend>University</legend>
				<div class="container">
					<label for="university">
						Please specify the university you attended/attend/have
						chosen to attend after leaving Milestone: <span>
							By letting us know we can make sure that you can provide
							and/or receive the most useful advice in the camp.
						</span>
						<input
							type="text"
							name="universtiy"
							id="university"
						/>
					</label>
					<label for="course">
						Please specify the degree course you have selected:
						<input
							type="text"
							name="medical"
							id="medical"
						/>
					</label>
				</div>
			</div>
			<div class="set">
				<legend>Terms and Conditions</legend>

				<div class="container">
					<h6 for="acceptsTermsAndConditions">
						Do you understand and accept these points terms and
						conditions applied to your registration?

						<ol class="list-inside list-decimal font-normal *:mt-4">
							<li>
								The Institute (Milestone Consulting Kft.) handles my
								personal data in accordance with the current
								legislation and its own data handling policy made
								available on its website. I give my consent to the
								Institute contacting me about Leavers' Camp
								participation via email or phone. In addition, I give
								my consent that photos taken in the camp could be used
								for advertising matters in the future. The Institute's
								data handling policy is available at the following
								link:
								https://milestone-institute.org/milestone-institute-data-handling-policy/
							</li>
							<li>
								The Institute (Milestone Consulting Kft.) would like
								to stay in touch with me after the Leavers' Camp, to
								foster its alumni community and to let me know about
								their events via newsletters. The Institute's data
								handling policy is available at the following link:
								https://milestone-institute.org/milestone-institute-data-handling-policy/
								I can unsubscribe at any point.
							</li>
							<li>
								I have carefully examined and fully understand the
								procedure and structure regarding the issuance of
								registration fees. I hereby acknowledge my consent for
								the camp organizers to revoke my registration as per
								the policies stated on the camp website. Additionally,
								I have familiarized myself with and agree to abide by
								the house rules applicable to all participants during
								the camp's duration.
							</li>
							<li>
								While the organizers prioritize providing a safe
								experience at the camp, I am ultimately responsible
								for my own health and safety during the event.
							</li>
						</ol>
					</h6>

					<div class="flex gap-4 *:cursor-pointer">
						<input
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
			<button
				type="submit"
				class=" mt-4 w-full rounded-xl bg-gold-900 px-8 py-4 text-center text-lg font-bold text-white shadow-md hover:bg-gold-800"
			>
				Register
			</button>
		{/if}
	</form>
</section>

<style lang="postcss">
	form {
		@apply text-lg;
	}

	.set {
		@apply mb-8 grid grid-cols-1 border-b-2 md:mb-0  md:grid-cols-[16rem,_1fr];
	}

	.radio-set {
		@apply flex gap-12;
	}

	.container {
		@apply flex flex-col gap-4 pb-4 pt-4;
	}

	.split {
		@apply grid grid-cols-1 gap-4 md:grid-cols-2;
	}
	label,
	h6 {
		@apply flex flex-col gap-1 font-semibold;

		& span {
			@apply -mt-1 text-balance text-base font-light leading-tight text-zinc-600;
		}

		& strong {
			@apply font-medium underline;
		}
	}
	.option-label {
		@apply mt-2 flex cursor-pointer flex-row items-center gap-2 py-2 pr-4;
	}

	.checkbox-label {
		@apply flex cursor-pointer flex-col items-center justify-center rounded-2xl border-4 px-6 text-center text-xl opacity-75 hover:border-gold-400 hover:bg-gold-100 hover:opacity-100 peer-checked:border-gold-900 peer-checked:bg-gold-300 peer-checked:font-bold peer-checked:opacity-100;
	}

	input {
		@apply rounded-lg border-2 border-zinc-200 p-2;
	}

	legend {
		@apply mr-4 block pr-4  pt-4 font-serif  text-2xl font-bold md:border-r-2;
	}
</style>
