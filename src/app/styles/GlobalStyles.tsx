// styles/GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html {
        scroll-behavior: smooth;
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        font-family: 'Poppins', sans-serif; /* Adjust based on the Webflow font */
        color: #333; /* Common text color */
        background-color: #f4f4f4; /* Page background */
        overflow-x: hidden;
    }

    h1, h2, h3, h4, h5, h6 {
        color: #111; /* Match heading color */
    }

    p {
        line-height: 1.6;
    }

    a {
        color: #0070f3; /* Webflow link color */
        text-decoration: none;
    }
`;

export default GlobalStyles;
