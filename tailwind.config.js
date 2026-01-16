/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        crimson: {
          50: '#fdf2f4',
          100: '#fce7ea',
          200: '#f8d0d9',
          300: '#f2aebc',
          400: '#e87d95',
          500: '#d94e6d',
          600: '#c23253',
          700: '#a3203e',
          800: '#881d36',
          900: '#731c30', // Deep rich crimson
          950: '#410b16',
        },
        gold: {
          100: '#fbf7e6',
          200: '#f5ebc5',
          300: '#ebda96',
          400: '#e0c463',
          500: '#d4af37', // Standard Gold
          600: '#b88f2b',
          700: '#946e25',
        },
        cream: '#F9F5F0',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
