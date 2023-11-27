import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  p {
    color: #222;
    font-family: "Poppins";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 48px;
  }

  body.dark-mode {
    background-color: #222;
    h1 {
      color: #fff;
    }
    p {
      color: #fff;
    }
  }
`;

export default GlobalStyle;
