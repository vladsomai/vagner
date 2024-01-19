/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/lib/components/**/*.{svelte,js,ts}',
		'./src/routes/**/*.{svelte,js,ts}',
		'./src/app.html',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		extend: {
            animation: {
                'bounce-slow': 'bounce 3s infinite ',
              }
        }
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#CCD5AE',
					secondary: '#E9EDC9',
					accent: '#D4A373',
					neutral: '#FAEDCD',
					'base-100': '#FEFAE0',
					info: '#3ABFF8',
					success: '#36D399',
					warning: '#facc15',
					error: '#F50057'
				}
			}
		]
	}
};
