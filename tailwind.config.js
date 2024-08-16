/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    colors: {
      "custom-red": "#d3273e", // Nombre y color personalizado
      "custom-blue": "#245ba7", // Nombre y color personalizado
      "custom-blue-ligth": "#006fb9",
      "custom-yellow": "#ffdd35",
      "custom-yellow-ligth": "#ffea80",
      "custom-base": "#f1f4fa",
      "custom-green": "#65ac5b",
      "custom-dark-blue": "#1f3545",
      "custom-dark-blue-x2": "#192c39",
      "custom-blue-survey": "#5081ff",
    },
    width: {
      18: "4.5rem",
      30: "7.5rem",
      42: "10.5rem",
      85: "22rem",
      100: "26rem",
      110: "28rem",
      125: "30rem",
      128: "32rem",
      144: "36rem",
      250: "68rem",
    },
    height: {
      18: "4.5rem",
      85: "22rem",
      120: "35rem",
      150: "40rem",
      155: "43rem",
      160: "45rem",
      170: "50rem",
    },
  },
};
export const plugins = [];
