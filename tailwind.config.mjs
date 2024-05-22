/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
			  'infinite-scroll': 'infinite-scroll 15s linear infinite',
			  'zoomIn': 'zoomIn 0.2s ease-in forwards',
			  'zoomOut': 'zoomOut 0.2s ease-out forwards',
			},
			keyframes: {
			  'infinite-scroll': {
				from: { transform: 'translateX(0)' },
				to: { transform: 'translateX(-100%)' },
			  },
			  'zoomIn': {
				'0%': { transform: 'scale(1)' },
				'100%': { transform: 'scale(1.05)' },
			  },
			  'zoomOut': {
				'0%': { transform: 'scale(1.05)' },
				'100%': { transform: 'scale(1)' },
			  },
			}                
		},
	},
	plugins: [
        require('flowbite/plugin')
    ]
}
