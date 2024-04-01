/**@type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs", "/server.js"],
  theme: {
    colors: {
      'background': '#121212',
      'logo-Color': '#FFC107',
      'btnGreen': '#4CAF50',
      'borderColor': 'rgb(255,255,255,0.37)',
      'white': '#FFFFFF'
    },
    fontFamily: {
      'mono': ["Montserrat Alternates", "sans-serif"]
    }
  },
  plugins: [require('@tailwindcss/container-queries')],
}
