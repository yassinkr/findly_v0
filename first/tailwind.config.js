/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius :{
        'xxl' : '16px',
        '3xl' : '29px'
      },
      fontSize: {
        'h1': '34px', // Custom font size for h1
        'h2': '29px', // Custom font size for h2
        'h3': '24px', // Custom font size for h3
        'h4': '20px', // Custom font size for h4
        'p': '16px', // Custom font size for paragraph
        'small': '12px',
        'h5': '10px', // Custom font size for h4
        'h6': '8px', // Custom font size for h4
        'h7': '5px', // Custom font size for h4
        
      },
      colors :{
        blue :{
          500:'#0E3566',
          400 :'#6790E0' ,
          300: '#46A1FA',
          200: '#D8ECFF'
        },
        green : {
          500 : ' #2B7AB5'
        },
        gray :{
          400:'#808080'
        }
      },
    },
  },
  plugins: [],
}

