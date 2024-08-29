import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    backgroundSecond: string;
    backgroundAlt: string;
    dark: string;
    firstColor: string;
    secondColor: string;
    cyan: string;
    cyan_400: string;
    cyan_500: string;
    emerald_400: string;
    blue: string;
    color: string;
    white: string;
    text: string;
    textPrimary: string;
    textSecondary: string;
    hover: string;
    hoverSecond: string;
    gray: string;
    gray_light: string;
    gray_easy: string;
    gray_medium: string;
    border: string;
    borderSecond: string;
  }
}