/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-red': '#d3273e', // Nombre y color personalizado
        'custom-blue': '#245ba7', // Nombre y color personalizado
        'custom-blue-ligth':'#006fb9',
        'custom-yellow': '#ffdd35',
        'custom-yellow-ligth' : '#ffea80',
        'custom-base': '#f1f4fa'
      },
      width: {
        '125': '30rem',
        '128': '32rem',  // Ejemplo: ancho adicional de 128 (32rem)
        '144': '36rem',  // Ejemplo: ancho adicional de 144 (36rem)
      },
      height:{
        '18':'4.5rem'
      },
    },
  },
  plugins: [],
}


