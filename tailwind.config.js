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
        // info: colors.blue,
        // success: colors.green,
        // warning: colors.yellow,
        // error: colors.red,
        brand: {
          DEFAULT: '#87E4FC',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FEFFFF',
          300: '#D7F6FE',
          400: '#AFEDFD',
          500: '#87E4FC',
          600: '#50D8FB',
          700: '#1ACBF9',
          800: '#05ABD5',
          900: '#047F9F',
        },
      },
      // textShadow: {
      //   sm: '0 1px 2px var(--tw-shadow-color)',
      //   DEFAULT: '0 2px 4px var(--tw-shadow-color)',
      //   lg: '0 8px 16px var(--tw-shadow-color)',
      // },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    // require('@tailwindcss/aspect-ratio'),
    require('@vechaiui/core')({
      cssBase: true,
      // colors: ['info', 'success', 'warning', 'error'],
    }),
    // plugin(function ({ matchUtilities, theme }) {
    //   matchUtilities(
    //     { 'text-shadow': (value) => ({ textShadow: value }) },
    //     { values: theme('textShadow') }
    //   );
    // }),
  ],
};
