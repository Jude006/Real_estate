/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:"#ff7676",
        secondary:"#322429",
        dim: "#2e3746",
      }
    },
    fontFamily:{
      barlow: ["barlow","sans-serif"],
      mont:["Montserrat", "sans-serif"],
      lora: ["lora","sans-serif"],
    },
  },
  plugins: [],
}