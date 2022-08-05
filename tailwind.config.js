/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        one : "hsl(158, 36%, 37%)",
        two : "hsl(30, 38%, 92%)",
        three : "hsl(212, 21%, 14%)",
        four : "hsl(228, 12%, 48%)",
        five : "hsl(0, 0%, 100%)"
      }
    },
  },
  plugins: [],
}
