import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
  margin: 0;
  text-decoration: none;
  outline: none;
}
html {
    font-size: 62.5%;
}
body {
    font-size: 1.6rem;
}

button, a, input, textarea {
    cursor: pointer;
}

`;
