/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#05070F',
        navy: '#0B1530',
        electric: '#2F80FF',
        glow: '#8CCBFF',
        mist: '#93A1BD',
      },
      fontFamily: {
        display: ['Syne', 'system-ui', 'sans-serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(47, 128, 255, 0.6)',
      },
    },
  },
  plugins: [],
};
