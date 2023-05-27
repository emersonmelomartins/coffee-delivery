import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: ${props => props.theme.background};
  }

  body,
  input,
  textarea,
  button {
    font-family: "Roboto", sans-serif;
  }

  h1 {
    font-family: "Baloo 2", sans-serif;

  }

  button {
    cursor: pointer;
    &:disabled {
      cursor: not-allowed;
      opacity: 0.7;
    }
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    display: block;
  }

`;
