/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003768',
        secondary: '#00264d',
        accent: '#e65c00'
      },
      animation: {
        'slower-scroll': 'slower-scroll 60s linear infinite',
      },
      keyframes: {
        'slower-scroll': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-200%)' },
        },
      },
    },
  },
  plugins: [],
}