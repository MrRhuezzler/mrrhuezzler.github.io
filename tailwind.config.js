/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0f0e12",
      },
      animation: {
        "move-gradient-bg": "move-gradient-bg 8s infinite linear",
      },
      fontFamily: {
        mario: ["'Press Start 2P'", "cursive"],
      },
    },
  },
  plugins: [],
};
