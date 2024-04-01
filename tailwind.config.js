// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./views/**/*{.html,.ejs}", "/server.js"],
  theme: {
    extend: {},
    colors: {
      'background': '#121212', // Define your background color here
      'logo-Color': '#FFC107',
      'sideBarColor': '#272727',
      'btnGreen': '#4CAF50',
      'borderColor': 'rgb(255,255,255,0.37)',
      white: colors.white ,
      black: colors.black,
    },
    fontFamily: {
      'mono': ["Montserrat Alternates", "sans-serif"],
      'mon': ["Montserrat", "sans-serif"]
    }
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('tailwindcss-animated')
  ],
}
