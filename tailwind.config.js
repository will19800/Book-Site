/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx}"],

  theme: {
    extend: {
      colors: {
        mainblue: "#92C7CF",
        darkblue: "#40A2E3",
        lightblue: "#AAD7D9",

        backgroundwhite: "#FBF9F1",
        darkwhite: "#E5E1DA",
        grey: "#2F4F4F",
        ivory: "#FFFFF0",
        lightwhite: "#F2F2F2",
      },

      fontFamily: {
        radiocanada: "Radio Canada",
        overpass: "Overpass",
      }
    },
  },
  plugins: [],
}

