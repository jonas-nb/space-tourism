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
      "destination-bg-mobile": "url(../img/background-destination-mobile.jpg)",
      "destination-bg-desktop":
        "url(../img/background-destination-desktop.jpg)",
      "destination-bg-tablet": "url(../img/background-destination-tablet.jpg)",
      "crew-bg-mobile": "url(../img/background-crew-mobile.jpg)",
      "crew-bg-tablet": "url(../img/background-crew-tablet.jpg)",
      "crew-bg-desktop": "url(../img/background-crew-desktop.jpg)",
      "tec-bg-mobile": "url(../img/background-technology-mobile.jpg)",
      "tec-bg-tablet": "url(../img/background-technology-tablet.jpg)",
      "tec-bg-desktop": "url(../img/background-technology-desktop.jpg)",
    },
  },
  plugins: [require("daisyui")],
};
