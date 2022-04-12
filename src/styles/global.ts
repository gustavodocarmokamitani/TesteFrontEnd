import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #F2F2F2;
        --white: #ffffff;
        --gray-button: #A4A4A4;
        --dark-blue: #22304E;
        --light-blue: #2B9FBB;
        --text: #6D6C6C;
        --background-button: #A4A4A4;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;        
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
         }
    }
    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 500;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .active {      
        color: var(--light-blue) !important;
         
        div {
            svg {
                
                    path {
                        stroke: var(--light-blue) !important;
                    }
                
            }
        }
    }
`