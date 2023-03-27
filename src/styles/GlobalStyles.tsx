import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, p, label, a, table, span, div {
    font-family: 'FONTNAME', sans-serif !important;
  }
  
  html {
    font-size: 16px;
  }

  body, input, button {
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,.2);
    border-radius: 5px;
  }

  ::-webkit-scrollbar {
      width: 6px!important;
      height: 6px!important;
  }

  ::-webkit-scrollbar-track {
      background: hsla(0,0%,100%,.1);
  }

  .hidden {
    display: none;
    visibility: hidden;
  }
`;

export default GlobalStyles;
