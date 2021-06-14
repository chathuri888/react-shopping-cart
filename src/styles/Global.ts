import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    justify-content: center;
  }

  body {
    --webkit-font-smoothing: antialised;
    font-family: 'Open Sans', sans-serif;
    justify-content: center;
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  button {
    cursor: pointer;
  }
`
