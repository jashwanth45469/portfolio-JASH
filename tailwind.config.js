/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 0 1px rgba(96, 165, 250, 0.25), 0 0 25px rgba(96, 165, 250, 0.2)'
      }
    }
  },
  plugins: []
};
