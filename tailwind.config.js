const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  target: "relaxed",
  prefix: "",
  important: false,
  separator: ":",
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
    },
  },
  variants: {
    extend: {
      transform: ["hover", "focus"],
    },
  },
  plugins: [],
};
