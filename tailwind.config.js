/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        background_buttons_color: '#0047FF',
        background_color: "#000000",
      }
    },
  },
  plugins: [],
}

