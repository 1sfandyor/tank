/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '50': '50%',
      },

      screens: {
        sm: '600px',
        md: '768px',
        lg: '984px',
        xl: '1300px',
        '2xl': '1496px',
      },

      colors: {
        black: "#181818",
        darkCyan: '#1c2121',
        semiDarkCyan: "#252c2c",
        gray: '#939697',
        darkGray: '#383838',
        orange: '#fe8630',
        lightOrange: '#ff9549',
        error: '#ff2b00',
        success: '#00D154'
      },

      fontFamily: {
        primary: ['TT TANK', 'sans-serif']
      }
    },



    container: {
      center: true,
      
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    }

  },
  plugins: [],
}