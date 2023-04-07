/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'all': '0  20px 25px 15px rgb(0 0 0 / 0.1)',
      },
      colors :  {
        "bg1":"#F1DECF ",
        "bg2" : "#F1DECF",
       "bg3" : "#1D1D1D",
        "text1" : "#3D3D3D", 
        "100% " :  "#F5EADF",
        "button" : "#3B1500",
        
      }, fontFamily: {
        'mono': ['Jost, Glacial Indifference, Montserrat, Open Sans, sans-serif' ],
      },
    },
  },
  plugins: [],
}