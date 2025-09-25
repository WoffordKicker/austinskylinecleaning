/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        custom: "hsla(209, 91%, 82%, 1)",
        accent: " #A9D5FC",
        light: " #EFF8FF",
        lightBg: "hsla(208, 100%, 97%, 1)",
        tableBg: "hsla(0, 0%, 95%, 1)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};