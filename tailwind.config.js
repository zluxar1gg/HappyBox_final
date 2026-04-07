/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#f5f5f0',
        brand: { blue: '#2397d0', light: '#cde4f5', yellow: '#fff176', dark: '#1a1a1a' }
      },
      fontFamily: { sans: ['"Plus Jakarta Sans"', 'sans-serif'] },
      container: { center: true, padding: '1.5rem', screens: { xl: '1200px' } }
    },
  },
  plugins: [],
}
