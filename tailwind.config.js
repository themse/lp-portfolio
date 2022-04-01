module.exports = {
  content: ['./src/**/*.{tsx,ts}'],
  theme: {
    extend: {
      colors: {
        'tpl-grey-100': '#F6F6F6',
        'tpl-grey-200': '#E5E5E5',
        'tpl-grey-300': '#828282',

        'tpl-black-900': '#090909',
        'tpl-green': '#0ACF83',

        'tpl-blue-100': '#31C5F0',
        'tpl-blue-200': '#1ABCFE',

        'tpl-pink-100': '#D8A1FF',
        'tpl-pink-200': '#A259FF',

        'tpl-orange-100': '#FF7F18',
        'tpl-orange-200': '#FF7262',
        'tpl-orange-300': '#F24E1E',
      },

      fontFamily: {
        primary: ['Roboto-Medium', 'sans-serif'],
        secondary: ['Roboto-Bold', 'sans-serif'],
      },
    },

    screens: {
      xs: { max: '576px' },
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },

    container: {
      center: true,
    },
  },

  plugins: [],
};
