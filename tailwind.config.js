/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/public/images/one.jpg')",
      },
      colors: {
        primary: '#86EFD3',
        secondary: '#3CC697',
      },
    },
  },
  plugins: [],
};
