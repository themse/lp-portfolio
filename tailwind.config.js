module.exports = {
  content: ['./src/**/*.{tsx,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '',
        secondary: '',
        tertiary: '',
        dark: '',
        light: '',
      },

      fontFamily: {
        // primary: ['Some font Example', 'sans-serif'],
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
