/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          color: "#161514",
          header: "#f1c232",
          text: "#f1c232",
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
