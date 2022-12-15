/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      bellefair: ["Bellefair", "serif"],
      barlow: ["Barlow Condensed", "sans-serif"],
    },
    backgroundImage: {
      "mobile-bg": "url('../img/home-bg-mobile.jpg')",
      "tablet-bg": "url('../img/home-bg-tablet.jpg')",
      "desktop-bg": "url('../img/home-bg-desktop.jpg')",
    },
  },
  plugins: [require("daisyui")],
};
