/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'galaxy-img': "url('/src/images/galaxy-bg.webp')",
        'card-revers': "url('/src/images/card-revers.webp')",
        'lightsaber-blue': "url('/src/images/lightsaber-blue.webp')",
        'lightsaber-red': "url('/src/images/lightsaber-red.webp')",
        'ship-blue': "url('/src/images/ship-blue.webp')",
        'ship-red': "url('/src/images/ship-red.webp')",
      },
      fontFamily: {
        body: ['Pacifico', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
