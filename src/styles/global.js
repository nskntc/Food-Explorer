import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.DARK_400};
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        -webkit-font-smoothing: antialiased;

        min-height: 100vh;

        &::-webkit-scrollbar {
            width: 10px;
            height: 100%;
        }

        &::-webkit-scrollbar-track {
            background: transparent;
        }

        &::-webkit-scrollbar-thumb {
            background-color: ${({theme}) => theme.COLORS.LIGHT_700};
            border-radius: 20px;
            border: none;
        }
    }

    body, input, button, textarea {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        outline: none;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter .2s;
        animation: opacityAnimation .7s;
    }

    input, select, textarea{
        animation: opacityAnimation .7s;
    }

    button:hover, a:hover {
        filter: brightness(.9);
    }

    @keyframes opacityAnimation { 
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }
`