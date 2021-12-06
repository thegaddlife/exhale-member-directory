const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'exhale-green': {
          light: '#7D8B7A',
          DEFAULT: '#647062',
          dark: '#4c554a',
        },
        'exhale-grey': {
          light: '#f5f5f5',
          DEFAULT: '#DCDCDC',
          dark: '#888077',
        },
        'exhale-orange': {
          light: '#fcd695',
          DEFAULT: '#F7A008',
          dark: '#c68006',
        },
        'exhale-brown': {
          light: '#c7a993',
          DEFAULT: '#B68E71',
          dark: '#7D5B41',
        },
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
      },
    },
  },
  variants: {
    extend: {},
  },
  //plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')],
}
