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
        primary: '#7AB8FF', // primario
        primaryDarker: '#0f172a', // secundario
        softGray: '#F3F4F6', // texto por defecto
        accent: '#fb923c',
        accentDarker: '#C2410C',
        secondary: '#51E4B8', //Green-400
        secondaryDarker: '#1A9E80', //Green-400
        stateHover: '#628EF5', // ← Nivel principal
        stateActive: '#2BC49F', // ← Nivel principal
        textPrimary: '#F3F4F6', // ← text-textPrimary
        textSecondary: '#4B68B8', // ← text-textSecondary
        textAccent: '#fb923c', // ← text-textAccent
        textOnLight: '#0f172a', // ← text-textOnLight
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
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        borderGlow: {
          '0%': {
            boxShadow: '0 0 5px theme("colors.accent / 40%")',
            'background-position': '0% 0%',
          },
          '100%': {
            boxShadow: '0 0 20px theme("colors.accent / 60%")',
            'background-position': '100% 100%',
          },
        },
      },
      animation: {
        'slide-left': 'slideLeft 3s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'slide-right': 'slideRight 3s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'spin-slow': 'spin 2s linear infinite',
        'border-glow': 'borderGlow 3s linear infinite alternate',
      },
    },
  },
  plugins: [],
};
