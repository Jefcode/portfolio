/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['sahel', 'Inconsolata'],
				english: ['Inconsolata'],
				mont: ['Montserrat'],
			},
			colors: {
				gray: '#262b29',
			},
		},
	},
	plugins: [],
};
