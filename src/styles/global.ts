import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: background-color 0.3s ease, color 0.3s ease;
    overflow-x: hidden; /* Prevent horizontal scrolling */
  }
    
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden; /* Prevent horizontal scrolling */
  }

  html.normal-scroll {
    scroll-behavior: auto;
  }

  body {
    background: ${props => props.theme.background};
    color: ${props => props.theme.textPrimary};
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden; /* Prevent horizontal scrolling */
  }

  ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
    background-color: ${props => props.theme.backgroundSecond};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.firstColor};
  }
`