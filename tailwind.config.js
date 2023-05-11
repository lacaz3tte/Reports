/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //light theme
        h1:'#fffbff',
        h2:'#3c3a4d',
        h3:'#454d70',
        h4:'#575ccd',
        h5:'#F0F5FC',
        //dark theme
        hd1:'#2b353a',
        hd2:'#ffdf9e',
        hd3:'#b38645',
        hd4:'#0092b3',
        hd5:'#21282c'
      },
      fontFamily: {
        rubic_light:["Rubic-Light"]
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}