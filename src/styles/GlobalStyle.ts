import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  p {
    color: #222;
    font-family: "Poppins";
    font-size: 1.75vw;
    font-style: normal;
    font-weight: 400;
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

  @media (max-width: 600px) {
    p{
      font-size: 3.5vw;
    }
  }
`;

export default GlobalStyle;
