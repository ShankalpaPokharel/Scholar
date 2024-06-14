/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#7a6ad8',
        secondary:'#f1f0fe',
        'inputbackground':'#ffffff1a'
      },
      screens:{
        'sm':'576px',
        'md':'768px',
        'lg':'992px',
        'xl':'1200px',
        '2xl':'1400px'
      },
      fontFamily:{
        'poppins':["Poppins", ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}