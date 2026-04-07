/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        pcos: {
          pink: '#f9a8d4',
          purple: '#a78bfa',
          lavender: '#ede9fe',
        },
      },
    },
  },
  plugins: [],
}
