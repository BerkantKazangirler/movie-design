/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '75': '19rem',
        '100': '31rem',
        '128': '32rem',
        '256': '56rem',
      },
      colors: {
        'main-primary':'#b43feb',
        'light-background':'#0d0c0f',
        'dark-background': '#0d0c0f',
        'alert-success': '#25dc37',
        'alert-error': '#eb3f5e',
        'alert-warning': '#ffcd1a',
        'dark-smooth': '#1a161f',
        'line-dark': '#29282f',
        'line-light' : '#e9ebed',
        'grayscale-10': '#f9f9f9',
        'grayscale-20': '#ecf1f6',
        'grayscale-30': '#e3e9ed',
        'grayscale-40': '#d1d8dd',
        'grayscale-50': '#bfc6cc',
        'grayscale-60': '#9ca4ab',
        'grayscale-70': '#78828a',
        'grayscale-80': '#66707a',
        'grayscale-90': '#434e58',
        'grayscale-100': '#171725',
      },
      container: {
        screens: {
          sm: '400px',
          md: '450px',
          lg: '728px',
          xl: '984px',
          '2xl': '1240px',
        },
      },
      fontFamily: {
        customFont: ['"inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
}

