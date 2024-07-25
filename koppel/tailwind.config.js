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
        'custom-base': '#f1f4fa',
        'custom-green' : '#65ac5b',
        'custom-dark-blue':'#1f3545',
        'custom-dark-blue-x2':'#192c39'
      },
      width: {
        '85':'22rem',
        '125': '30rem',
        '128': '32rem',  // Ejemplo: ancho adicional de 128 (32rem)
        '144': '36rem',  // Ejemplo: ancho adicional de 144 (36rem)
      },
      height:{
        '18':'4.5rem',
        '150':'40rem',
        '160':'45rem',
      },
    },
  },
  plugins: [],
}


