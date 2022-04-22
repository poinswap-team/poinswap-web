const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './node_modules/@vechaiui/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        info: colors.blue,
        success: colors.green,
        warning: colors.yellow,
        error: colors.red,
        brand: {
          100: '#e7fafe',
          200: '#cff4fe',
          300: '#b7effd',
          400: '#9fe9fd',
          500: '#87e4fc',
          600: '#6cb6ca',
          700: '#518997',
          800: '#365b65',
          900: '#1b2e32',
        },
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        { 'text-shadow': (value) => ({ textShadow: value }) },
        { values: theme('textShadow') }
      );
    }),
    require('@vechaiui/core')({
      cssBase: true,
      colors: ['info', 'success', 'warning', 'error'],
    }),
  ],
};
