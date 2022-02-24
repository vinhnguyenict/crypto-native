// import original module declaration
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    theme: 'dark' | 'light';
    colors: any;
    fonts: any;
    space: any;
    fontSizes: any;
    fontWeights?: any;
    lineHeights?: any;
    styles?: any;
  }
}
