/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        chakra: ["Chakra Petch", "sans-serif"],
      },
      colors: {
        primary: {
          color: "#161514",
          header: "#f1c232",
          header_hover: "#ba951e",
          text: "#F2F7F2",
          hover: "#465362",
        },
        secondary: {
          DEFAULT: colors.neutral[200],
          hover: colors.neutral[300],
          border: colors.neutral[400],
          text: colors.neutral[500],
          dark: colors.neutral[800],
          ["dark-hover"]: colors.neutral[900],
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-debug-screens"),
    // require("tailwind-brand-colors"),
  ],
};
