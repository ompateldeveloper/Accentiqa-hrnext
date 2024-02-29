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
        'theme-text':'#282828',
      },
    },
  },
  plugins: [],
}

