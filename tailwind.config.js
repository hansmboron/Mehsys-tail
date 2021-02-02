module.exports = {
  purge: {
    enabled: true,
    content: ['./public/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#850085',
          400: '#991099',
        }
      },
      fontFamily: {
        nunito: ['Nunito']
      }
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
}
