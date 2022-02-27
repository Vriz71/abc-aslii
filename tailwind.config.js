module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#1DC0AD',
        'main-color-trans' : '#DBF6E9',
        'main-hover': '#2EB086',
        'background': 'rgba(29, 192, 173, 0.05)',
        'trans' : '#7F7F7F',
        'trans2' : '#C4C4C4',
        'Telegram': '#289FD2',
        'Microsoft': '#5059C9',
        'Google': '#528FF5',
        'Figma': '#F24E1E',
        'Whimsical': '#6C10B6'
      },
      fontFamily: {
        'Nunito' : ['Nunito', 'sans-serif'],
        'Montserrat' : ['Montserrat Alternates', 'sans-serif']
      },
      fontWeight: {
      thin: 100,
      'extra-light': 200,
      light: 300,
      normal: 400,
      medium: 500,
      bold: 700,
      'extra-bold': 800,
      black: 900,
      },
      fontSize: {
        'sxs': '.68rem',
      }
    },
  },
  plugins: [],
}
