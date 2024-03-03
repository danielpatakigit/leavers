/** @type {import('tailwindcss').Config}*/
const config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		fontFamily: {
			sans: ["Raleway", "ui-sans-serif"],
			serif: ["Libre Baskerville", "ui-serif"],
		},
		extend: {
			colors: {
				gold: {
					100: "hsl(55, 85%, 97%)",
					200: "hsl(54, 85%, 95%)",
					300: "hsl(54, 86%, 93%)",
					400: "hsl(53, 87%, 91%)",
					500: "hsl(52, 89%, 87%)",
					600: "hsl(51, 91%, 83%)",
					700: "hsl(49, 94%, 77%)",
					800: "hsl(47, 96%, 60%)",
					900: "hsl(44, 98%, 52%)",
				},
			},
		},
	},

	plugins: [],
};

module.exports = config;
