/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#FF385C',
          dark: '#E00B41',
          light: '#FFF8F9',
        },
        primary: '#222222',
        secondary: '#717171',
        border: '#DDDDDD',
        lightbg: '#F7F7F7',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Roboto', 'Helvetica Neue', 'sans-serif'],
      },
      boxShadow: {
        card: '0 6px 16px rgba(0, 0, 0, 0.12)',
        modal: '0 8px 28px rgba(0, 0, 0, 0.28)',
        floating: '0 2px 4px rgba(0,0,0,0.18)',
      }
    },
  },
  plugins: [],
}
