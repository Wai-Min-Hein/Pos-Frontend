/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'para' : ["Poppins", 'sans-serif'],
        'header': ["Roboto", 'sans-serif'],
        'button': ["Nunito", 'sans-serif']
      },
      colors: {
        'btn': '#19CC85',
        'btnDark': '#071A52',

        'transparentBgGreen': 'rgba(25,204,132,0.1)',


        'gray': '#e7e7e5',




        'bgDark': '#071A52',
        'bgLight': '#F2F2F2',

        'paraText': '#868788',
        'headerText': '#092C4C',

        'darkText': '#112A46'
        
      },
    },
  },
  plugins: [],
}

