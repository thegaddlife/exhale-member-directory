module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'exhale-green': {
          light: '#7D8B7A',
          DEFAULT: '#647062',
          dark: '#4c554a',
        },
        'exhale-grey': {
          light: '#f5f5f5',
          DEFAULT: '#f5f5f5',
          dark: '#f5f5f5',
        },
        'exhale-orange': {
          light: '#c68006',
          DEFAULT: '#c68006',
          dark: '#c68006',
        },
        'exhale-brown': {
          light: '#c7a993',
          DEFAULT: '#c7a993',
          dark: '#c7a993',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')],
}
