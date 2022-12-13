/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      bellefair: ["Bellefair", "serif"],
      barlow: ["Barlow Condensed", "sans-serif"],
    },
    backgroundImage: {
      "mobile-bg": "url('./img/bg.jpg')",
      "footer-texture": "url('/img/footer-texture.png')",
    },
  },
  plugins: [require("daisyui")],
};
