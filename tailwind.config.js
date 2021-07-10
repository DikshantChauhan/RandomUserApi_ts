const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      primary: {
        darkest: '#1e3932',
        dark: '#008248',
        light: '#d4e9e2',
        lightest: '#f1f8f6',
      },
      secondary: '#f3f1e7',
      golden: '#cba258',
    },

    screens: {
      '2xl': {'max': '1440px'},
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'},
      'md': {'max': '782px'},
      'sm': {'max': '639px'},
    },

    fontFamily: {
      'sans': [`SoDoSans`, `Helvetica Neue`, `Helvetica`, `Arial`, `sans-serif`],
    },

    extend: {
      backgroundImage: theme => ({
        'hero': "url('/src/img/xl-hero-desktop_2021.webp')",
      }),

      transitionDuration: {
        '0': '0ms',
       },

      maxWidth: {
        '8xl': '90rem',
        '7.5': '30rem',
        '4.75': '19rem',
        '4.125': '16.5rem',
       },

      minWidth: {
        '1/6': '16.66%',
       },

      width: {
        '1/6': '16.66%',
       },

       margin: {
        38: '9.5rem',
      },

       padding: {
        '1/5': '20%',
        'full': '100%',
      },

      fontSize: {
        '0.22': '0.9rem'
      },

      boxShadow: {
        'shadowInset': '0px 0.1px 2px 0px rgba(0,0,0,0.5) inset',
      },

      backgroundPosition: {
        '1/2': '55%',
       },

       backgroundSize: {
         'auto-100%': 'auto 100%',
       },

    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
