/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#fefdfb',
          100: '#fef9f2',
          200: '#fdf0e1',
          300: '#fbe4c4',
          400: '#f8d29d',
          500: '#f5f5dc', // Main beige
          600: '#e4d4b8',
          700: '#d2c094',
          800: '#c0ac70',
          900: '#ae984c',
        },
        olive: {
          50: '#f8f9f7',
          100: '#f0f2ed',
          200: '#e1e5db',
          300: '#9ca986', // Main olive green
          400: '#8a9673',
          500: '#788360',
          600: '#66704d',
          700: '#545d3a',
          800: '#424a27',
          900: '#303714',
        },
        stone: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out',
      }
    },
  },
  plugins: [],
};