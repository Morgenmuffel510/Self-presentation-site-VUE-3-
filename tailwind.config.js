/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-body': '#1B292A',
        'text-link': '#D7C894',
      }
    },
  },
  plugins: [],
}

