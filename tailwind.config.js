/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors :  {
        "bg1":"#F5EADF  ",
        "bg2" : "#F1DECF",
       "bg3" : "#1D1D1D",
        "text1" : "#3D3D3D", 
        "100% " :  "#F5EADF",
        "button" : "#412723"
      }, fontFamily: {
        'mono': ['Jost, Glacial Indifference, Montserrat, Open Sans, sans-serif' ],
      },
    },
  },
  plugins: [],
}