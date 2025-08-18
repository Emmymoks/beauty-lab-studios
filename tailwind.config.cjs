/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        blush: "#f7e9e6",
        champagne: "#f3e8d9",
        softgold: "#cbb28a",
      },
      backgroundImage: {
        silk: "url('/silk.png')",
        marble: "url('/marble.png')",
      },
    },
  },
  plugins: [],
}
