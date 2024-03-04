/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'theme-1':'#5872E3',
        'theme-2':'#DDE3FF',
        'theme-3':'#16A34A',
        'theme-text':'#282828',
      },
    },
    screens: {
			'2xl': { max: "1536px" },
			// => @media (max-width: 1536px) { ... }

			xl: { max: "1279px" },
			// => @media (max-width: 1279px) { ... }

			lg: { max: "1023px" },
			// => @media (max-width: 1023px) { ... }

			md: { max: "767px" },
			// => @media (max-width: 767px) { ... }

			sm: { max: "639px" },
			// => @media (max-width: 639px) { ... }
      
			xs: { max: "474px" },
			// => @media (max-width: 474px) { ... }
		},
  },
  plugins: [],
}

