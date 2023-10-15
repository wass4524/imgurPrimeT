/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    minHeight: {
      '52': '13rem'
    },
    extend: {
      width: {
        '128': '32rem',
        '68': '17rem'
      }
    },
  },
  plugins: [],
}