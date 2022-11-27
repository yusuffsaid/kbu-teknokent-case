/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: "Inter, sans-serif",
      },
      colors:{
        "menu-color": "#1D263A",
        "active-color":"#1787FC",
      }
    },
  },
  plugins: [],
}
