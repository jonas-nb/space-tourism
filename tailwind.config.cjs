/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      bellefair: ["Bellefair", "serif"],
      barlow: ["Barlow Condensed", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};
