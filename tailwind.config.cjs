/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "front-trailer": "url('./src/assets/FrontTrailerImg.jpeg')",
      },
    },
  },
  plugins: [],
};
