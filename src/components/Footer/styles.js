import styled from "styled-components"

export const Container = styled.footer`
    grid-area: footer;

    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 20px;

    background-color: ${({theme}) => theme.COLORS.DARK_700};

    > p{
        font-family: "DM Sans", sans-serif;
        font-size: 12px;
        font-weight: 400;
        color: ${({theme}) => theme.COLORS.LIGHT_200};
    }

    @media (min-width: 1200px){
        padding: 24px 123px;

        > p{
            font-size: 14px;
        }
    }
`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 7px;

    > h1{
        font-size: 15.262px;
        font-weight: 700;
        color: ${({theme}) => theme.COLORS.LIGHT_700};
    }

    @media (min-width: 1200px){
        > h1 {
            font-size: 24px;
        }

        > svg{
            width: 30px;
            height: 30px;
        }
    }
`