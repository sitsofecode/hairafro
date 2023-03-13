/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors :  {
        "bg1":"#c39353",
        "bg2" : "#c19c53",
       "bg3" : "#1D1D1D",
        "text1" : "#3D3D3D", 
        "100% " :  "#F5EADF"
      }, fontFamily: {
        'mono': ['Jost, Glacial Indifference, Montserrat, Open Sans, sans-serif' ],
      },
    },
  },
  plugins: [],
}