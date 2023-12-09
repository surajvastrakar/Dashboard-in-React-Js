/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      ...require("tailwindcss/colors"),
      primary: "#5F00D9",
      main: "#F3F3F7",
    },
    extend: {},
  },
  plugins: [],
};
