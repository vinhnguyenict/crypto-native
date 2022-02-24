import {DefaultTheme} from 'styled-components';

const theme: DefaultTheme = {
  theme: 'dark',
  colors: {
    dark: {
      black: '#000',
      white: '#fff',
      text: '#C4CAD7', //	Body foreground color
      input: '#fff',
      background: '#111418', //Body background color
      primary: '#4D9FB1', //	Primary brand color for links, buttons, etc.
      secondary: '#646b6c', //	A secondary brand color for alternative styling
      danger: '#DE5648',
      accent: '#CAB583', //	A contrast color for emphasizing UI
      highlight: '#191D23', //	A background color for highlighting text
      muted: '#2A2F35', //A faint color for backgrounds, borders, and accents that do not require high contrast with the background color
    },
    light: {
      black: '#000',
      white: '#fff',
      text: '#000',
      input: '#000',
      background: '#F2F3F4',
      primary: '#4D9FB1',
      secondary: '#646b6c',
      danger: '#DE5648',
      accent: '#CAB583',
      highlight: '#FFFFFF',
      muted: '#E9EAEB',
    },
  },
  fonts: {
    body: 'Inter, sans-serif',
    heading: 'Inter',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [10, 12, 14, 16, 20, 24, 32],
  fontWeights: [400, 500, 600, 700],
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  styles: {
    input: {
      height: 32,
      padding: 10,
      borderWidth: 1,
      borderRadius: 5,
    },
    button: {
      height: 40,
      borderWidth: 1,
      borderRadius: 5,
    },
  },
};

export default theme;
