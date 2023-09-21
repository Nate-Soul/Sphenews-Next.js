/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding:{
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    },
    extend: {
      colors: {
        'main-100': '#F8E9E4',
        'main-200': '#E8C7B3',
        'main-300': '#D6A382',
        'main-400': '#C68451',
        'main-500': '#A15C38',
        'main-600': '#85492E',
        'main-700': '#683525',
        'main-800': '#4C241B',
        'main-900': '#311213',
        'secondary-100': '#FEFDFB',
        'secondary-200': '#FDFBE8',
        'secondary-300': '#FBF8D5',
        'secondary-400': '#F9F5C3',
        'secondary-500': '#F5CC9E',
        'secondary-600': '#F3C78B',
        'secondary-700': '#F0BF78',
        'secondary-800': '#EEB765',
        'secondary-900': '#EBB052',
        'light': '#F7F1F0',
        'dark': '#262220'
      },
      boxShadow: {
        'custom': '0 0 4px 0 rgba(195, 166, 160, .60)',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
      },
    },
  },
  plugins: [],
  darkMode: 'class'
}
