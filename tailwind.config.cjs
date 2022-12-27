/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.jsx",
    "./src/components/**/*.jsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        sunnyspells: ["SunnySpells", "sans-serif"],
      },
    },
  },
  plugins: [],
}