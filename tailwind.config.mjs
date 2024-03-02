/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'purple-light-old': '#F4EEFF',
				'purple-dark-old': '#424874',
				'purple-lavender-old': '#DCD6F7',
				'purple-blue-old': '#A6B1E1',
				'purple-heavy': '#352F44',
				'purple-dark': '#5C5470',
				'purple-light': '#B9B4C7',
			},
		},

	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
