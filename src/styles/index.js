import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    box-sizing: border-box;
    min-height: 100%;
    height: 100%;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  body {
    background-color: ${(props) => props.theme.colors.accent.pearl};
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: proxima-nova, sans-serif;
  }
`;
