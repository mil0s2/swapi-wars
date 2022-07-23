/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'galaxy-img': "url('/src/images/galaxy-bg.webp')",
      },
      fontFamily: {
        body: ['Pacifico', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
