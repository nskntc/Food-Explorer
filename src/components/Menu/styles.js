import styled from "styled-components"

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: ${props => props.isVisible ? '0' : '-100%'};

    width: 100%;
    height: 100%;

    animation: showMenu .4s;

    background-color: ${({theme}) => theme.COLORS.DARK_400};

    > header{
        height: 114px;

        display: flex;
        align-items: center;
        justify-content: flex-start;
        text-align: center;
        gap: 16px;

        padding: 60px 28px 24px;

        background-color: ${({theme}) => theme.COLORS.DARK_700};

        button{
            border: none;
            background: transparent;
        }

        p{
            font-size: 21.163px;
            font-weight: 400;
            color: ${({theme}) => theme.COLORS.LIGHT_100};
        }
    }

    > main{
        height: 100%;

        padding: 36px 28px 14px;

        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: flex-start;
        gap: 32px;

        input{
            padding: 16px 14px 16px 52px;
        }

        svg{
            left: 14px;
        }

        button{
            border: none;
            background: transparent;

            font-family: "Poppins", sans-serif;
            font-size: 24px;
            font-weight: 300;
            line-height: 140%;
            text-align: left;

            color: ${({theme}) => theme.COLORS.LIGHT_300};

            padding: 10px;

            border-bottom: 1px solid ${({theme}) => theme.COLORS.DARK_1000};
        }
        
        .hidden{
            display: none;
        }
    }

    @keyframes showMenu {
        from {
            opacity: 0;
            width: 0;
        }
        to {
            opacity: 1;
            width: 100%;
        }
    }
`