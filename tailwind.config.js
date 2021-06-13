const colors = require('tailwindcss/colors')
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  target: "relaxed",
  prefix: "",
  important: false,
  separator: ":",
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      transform: ['hover', 'focus'],
      
    },
  },
  plugins: [],
};
