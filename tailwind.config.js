/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'galaxy-img': "url('/src/images/galaxy-bg.webp')",
        'card-revers': "url('/src/images/card-revers.webp')",
        lightsaber: "url('/src/images/lightsaber.webp')",
      },
      fontFamily: {
        body: ['Pacifico', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
