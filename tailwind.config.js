/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#2C3E50",
        deco: "#FFA500",
        button1: "#28888C",
      },
      fontFamily: {
        jomhuria: ["jomhuria-regular-webfont", "sans-serif"],
      },
    },
  },
  plugins: [],
};
