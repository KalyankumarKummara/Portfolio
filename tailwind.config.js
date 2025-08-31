/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Scan HTML & React files
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-animate'),
  require('@tailwindcss/typography'),
  ],
};
