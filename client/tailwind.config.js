/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik Mono One", "sans-serif"],
        biryani: ["Biryani", "sans-serif"],
      },
      colors: {
        darkgreen: "#264653",
        lightgreen: "#2A9D8F",
        orange: "#E76F51",
        success: "#2A9D8F",
        danger: "FC9494",
        grey: "#EDEDED",
      },
    },
  },
  plugins: [],
};
