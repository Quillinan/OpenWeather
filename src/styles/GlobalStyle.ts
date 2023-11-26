import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	* {
		font-family: "Poppins";
        font-weight: 400;
	}

    .principal{
        background-color: #EFEFEF;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`;

export default GlobalStyle;
