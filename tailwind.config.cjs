/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.tsx',
		'index.html',
	],
	theme: {
		extend: {
			colors: {
				background: '#09090A',
				'bg-modal': 'rgba(0,0,0,0.6)',
			},
			minHeight: {
				'h-modal': '525px',
			},
			minWidth: {
				'w-modal': '420px',
			},
			fontFamily: {
				inter: 'Inter, sans-serif',
			},
			fontSize: {
				large: '32px',
			},
			gridTemplateRows: {
				7: 'repeat(7, minmax(0, 1fr))',
			},
		},
	},
	plugins: [],
};
