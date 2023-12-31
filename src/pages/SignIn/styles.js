import styled from "styled-components"

export const Container = styled.div`
    width: 316px;
    height: 100vh;

    margin: 0 auto;
    margin-top: 158px;

    animation: scaleOpacityAnimation .7s;

    > .logo{
        margin-bottom: 71px;
    }
    @media (min-width: 1200px) {
        width: 100%;

        margin-top: 0;
        
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 300px;

        padding: 0 153px;

        > .logo{
            font-family: "Roboto", sans-serif;
            font-size: 32px;
            font-weight: 700;
            line-height: normal;

            white-space: nowrap;

           img{
                width: 70px;
                height: 70px;
           }
        }
    }
`

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 32px;

    text-align: left;

    > a{
        font-family: Poppins;
        font-size: 14px;
        font-weight: 500;
        color: ${({theme}) => theme.COLORS.LIGHT_100};
    }

    > h1{
        display: none;
    }

    @media (min-width: 1200px) {
        background-color: ${({theme}) => theme.COLORS.DARK_700};

        width: 476px;
        height: 540px;

        padding: 64px;

        border-radius: 16px;

        > h1{
            display: block;

            font-family:"Poppins", sans-serif;
            font-size: 32px;
            font-weight: 500;
            color: ${({theme}) => theme.COLORS.LIGHT_100};
        }
    }

    @keyframes scaleOpacityAnimation {
        0% {
            transform: scale(0);
            opacity: 0;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
`