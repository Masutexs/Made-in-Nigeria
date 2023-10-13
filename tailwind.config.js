/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '30' : '6.813rem',
        '35': '8.125rem',
      }
    },
  },
  plugins: [],
}