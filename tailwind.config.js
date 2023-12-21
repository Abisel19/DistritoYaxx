const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./index.html", // Agrega el archivo index.html de tu proyecto
    "./src/**/*.{js,jsx,ts,tsx}", // Agrega rutas de tus archivos JavaScript/JSX
  ],
  theme: {
    extend: {},
    screens: {
      '3xl': '2000px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
