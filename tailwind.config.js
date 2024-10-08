/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8b12fcff",
        secondary: "#F8F8FF",
        accent: "#DDE6ED",
        back: "#EEEEEE",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
