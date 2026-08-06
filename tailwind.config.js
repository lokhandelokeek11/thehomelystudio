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
          primary: '#8C6A5D',
          'primary-dark': '#725347',
          'primary-light': '#A37F71',
          secondary: '#F5EFEA',
          'secondary-dark': '#EBE0D8',
          accent: '#C89B7B',
          'accent-light': '#DCB497',
          bg: '#FFFDFC',
          card: '#FFFFFF',
          text: '#2E2E2E',
          muted: '#6B625D',
          border: '#E9DED5',
          'border-light': '#F2ECE6',
        }
      },
      fontFamily: {
        sans: ['"Google Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Google Sans"', 'Georgia', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(140, 106, 93, 0.08)',
        'soft-hover': '0 12px 30px -4px rgba(140, 106, 93, 0.16)',
        'glass': '0 8px 32px 0 rgba(140, 106, 93, 0.06)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      }
    },
  },
  plugins: [],
}
