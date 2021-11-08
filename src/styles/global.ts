import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle `
    :root {
        --background: #f0f2f5;
    }
    
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;

    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

`