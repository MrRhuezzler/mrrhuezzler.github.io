/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0f0e12",
      },
      animation: {
        "move-gradient-bg": "move-gradient-bg 2s infinite linear",
      },
      fontFamily: {
        ruluko: ["Ruluko", "sans-serif"],
      },
    },
  },
  plugins: [],
};
