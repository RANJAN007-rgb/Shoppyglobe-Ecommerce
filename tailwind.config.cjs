/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0ea5a4',
        accent: '#ef4444'
      },
      container: {
        center: true,
        padding: '1rem',
      }
    },
  },
  plugins: [],
}
