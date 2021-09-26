export default {
  grid: {
    container: '130rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    normal: 400,
    medium: 500,
    bold: 700,
    sizes: {
      xsmall: '1.4rem',
      small: '1.6rem',
      medium: '1.8rem',
      large: '2.0rem',
      xlarge: '2.4rem',
      xxlarge: '3.4rem'
    }
  },
  colors: {
    white: '#ffffff',
    gray: '#808080',
    black: '#000000',
    lightGray: '#f0f0f0',
    lightGray2: '#f7f8fc',
    green: '#3fcc71',
    blue: '#3799ff',
    red: '#e16259'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  shadow: {
    default: '0px 3px 6px #00000029'
  }
} as const
