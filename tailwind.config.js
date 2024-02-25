const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      green: "hsl(75, 94%, 57%)",
      white: "hsl(0, 0%, 100%)",
      grey: {
        500: "hsl(0, 0%, 20%)",
        900: "hsl(0, 0%, 12%)",
      },
      black: "hsl(0, 0%, 8%)",
    },
  },
};
