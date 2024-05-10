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
        'bg-card': '#4A4A4D',
        'bg-light-card': '#56595E',
        'title-row': '#4F504B',
      },
      backgroundImage: {
        'career': "url('/images/career/career.png')",
      }
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}

