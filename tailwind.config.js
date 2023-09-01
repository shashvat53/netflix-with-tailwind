/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        st: "1200px",
        xs: "475px",
      },
    },
  },
  plugins: [],
};
