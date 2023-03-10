/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        'pop':{ 
          '0%':{transform:"scale(0.99),opacity:0.8"},
          '75%':{transform:"scale(1.01)"},
          '100%':{transform:"scale(1),opacity:1"}
        } 
      },
      backgroundImage: {
        'primary': 'radial-gradient(circle farthest-corner at 0% 50%, #6776ff, #fff 45%);',
        'grid': 'url("/images/grid.svg")'
      },
      backgroundSize: {
        '150': '150%'
      },
      colors: {
        'primary': '#2b333f',
        'secondary': '#6776ff',
      }
      ,
      animation: {
        'pop':'pop 0.3s linear forwards 1',
      },
      yarncontainer: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    }
  },
  plugins: [],

};