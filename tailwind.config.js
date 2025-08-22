/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}', // Escanea HTML y TS en src
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Fuente principal
      },
      colors: {
        navyBlue: '#0f172a', // primario
        navyBlueSoft: '#4B68B8', // secundario
        softGray: '#F3F4F6', // texto por defecto
        accent: '#1e293b',
      },
      keyframes: {
        slideLeft: {
          '0%': { transform: 'translateX(-80px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(80px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'slide-left': 'slideLeft 3s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'slide-right': 'slideRight 3s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
    },
  },
  plugins: [],
};
