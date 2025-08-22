import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: background-color 0.3s ease, color 0.3s ease;
    overflow-x: hidden; /* Prevent horizontal scrolling */
    cursor: none !important; /* Hide default cursor */
  }
    
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    cursor: none !important; /* Hide default cursor for all elements */
  }

  /* Show default cursor on touch devices */
  @media (hover: none) and (pointer: coarse) {
    body, * {
      cursor: auto !important;
    }
  }

  /* Enhanced focus states for accessibility */
  *:focus-visible {
    outline: 2px solid #00d9ff !important;
    outline-offset: 2px !important;
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

  /* Interactive element classes for cursor effects */
  .cursor-pointer {
    /* Applied via JavaScript */
  }

  .cursor-text {
    /* Applied via JavaScript */
  }

  .cursor-grab {
    /* Applied via JavaScript */
  }

  .cursor-zoom {
    /* Applied via JavaScript */
  }

  .cursor-help {
    /* Applied via JavaScript */
  }

  .cursor-code {
    /* Applied via JavaScript */
  }

  .cursor-link {
    /* Applied via JavaScript */
  }

  /* Smooth transitions for interactive elements */
  a, button, input, textarea, [role="button"], [tabindex] {
    transition: all 0.2s ease;
  }

  /* Hover effects for better visual feedback */
  a:hover, button:hover, [role="button"]:hover {
    transform: translateY(-2px);
  }
`