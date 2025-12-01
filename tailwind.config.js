/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],

  theme: {
    aspectRatio: {
      auto: 'auto',
      square: '1 / 1',
      video: '16 / 9',
    },
    screens: {
      'less-than-xs': { max: '359px' },
      'less-than-sm': { max: '639px' },
      'less-than-md': { max: '767px' },
      tablet: { max: '768px' },
      'more-than-tablet': { min: '769px' },
      'less-than-lg': { max: '959px' },
      'less-than-xl': { max: '1247px' },
      'less-than-xl2': { max: '1445px' },
      'less-than-xl3': { max: '1919px' },
      xxs: '320px',
      xs: '360px',
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1248px',
      xl2: '1446px',
      xl3: '1900px',
    },
    colors: {
      white: '#fff',
      black: '#000',
      transparent: 'rgba(0,0,0,0)',
      TXT: '#0C0612',
      green: {
        light: '#62D059',
        DEFAULT: '#01C11F',
      },
      BG: {
        quest: '#E9DCAE',
        menu: '#140B1E',
        light: '#1E212D',
        lighter: '#32343e',
        DEFAULT: '#0C0612',
        bottom: '#2B2234',
        hover: '#d4d2cf30',
        aside: '#1D1723',
        primary: '#2A2234',
        secondary: {
          light: '#403848',
        },
        active: {
          DEFAULT: '#F6D515',
        },
        blue: {
          dark: '#1E102D',
        },
        scrollbar: '#F6D515',
      },
    },
  },
};
