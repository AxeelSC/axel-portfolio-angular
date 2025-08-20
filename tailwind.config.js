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
        // Paleta azulada personalizada
        dark: {
          DEFAULT: '#0f172a', // similar a slate-900
          light: '#1e293b', // similar a slate-800
          softer: '#334155', // similar a slate-700
          softBlue: '#3B82F6',
        },
        text: {
          soft: '#1f2937', // gray-800 en Tailwind
          accent: '#93c5fd', // azul clarito (para links/detalles)
        },
      },
    },
  },
  plugins: [],
};
