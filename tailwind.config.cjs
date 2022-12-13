/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      bellefair: ["Bellefair", "serif"],
      barlow: ["Barlow Condensed", "sans-serif"],
    },
    backgroundImage: {
      "home-mobile": "url('src/assets/imgs/home-mobile-bg.jpg')",
      "footer-texture": "url('/img/footer-texture.png')",
    },
  },
  plugins: [require("daisyui")],
};
