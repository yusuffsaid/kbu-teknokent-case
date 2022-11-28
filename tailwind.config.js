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
        "header-color":"#F9FAFB",
        "deactive-text-color":"#7F828A",
        "badge-1":"#20BFA9",
        "badge-2":"#FF794D",
        "badge-3":"#1787FC",
        "badge-4":"#9B51E0",
        "badge-5":"#413E65",
        "badge-6":"#F04037",
      },
      
    },
  },
  plugins: [],
}
