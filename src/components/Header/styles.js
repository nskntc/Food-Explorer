import styled from "styled-components"

export const Container = styled.header`
    height: 114px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    align-self: stretch;

    padding: 56px 28px 24px;

    background-color: ${({theme}) => theme.COLORS.DARK_700};

    > .input-search{
        display: none;
    }

    > .header-button{
        display: none;
    }

    > .signout-button{
        display: none;
    }

    > .list-button{
        background: transparent;
        border: none;
    }

    > .receipt{
        width: 32px;
        height: 32px;
    }

    > .logo{
        font-size: 14px;

        img{
            width: 30px;
            height: 30px;
        }
    }

    > .recibo-wrapper{
        position: relative;

        button{
            border: none;
            background: transparent;
        }

        .num-requests{
            position: absolute;
            top: -9%;
            right: -9%;

            width: 20px;
            height: 20px;

            display: flex;
            justify-content: center;
            align-items: stretch;

            text-align: center;

            border-radius: 50%;

            background-color: ${({theme}) => theme.COLORS.TOMATO_100};

            font-family: "Poppins", sans-serif;
            font-size: 14px;
            font-weight: 500;
            color: ${({theme}) => theme.COLORS.LIGHT_100};
        }

        .hidden{
            display: none;
        }
    }

    @media (min-width: 1200px) {
        padding: 23px 124px;

        > .input-search{
            display: block;
            width: 50%;
        }

        > .header-button{
            display: flex;
            align-items: center;
            justify-content: center;

            height: 56px;
            width: 20%;
        }

        > .signout-button{
            display: block;

            border: none;
            background: transparent;
        }
        
        > .recibo-wrapper{
            display: none;
        }

        > .list-button{
            display: none;
        }

    }
`

export const Button = styled.button`
    width: 100%;

    display: flex;
    padding: 12px 32px;
    justify-content: center;
    align-items: center;
    gap: 8px;

    background-color: ${({theme}) => theme.COLORS.TOMATO_100};

    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: ${({theme}) => theme.COLORS.LIGHT_100};

    border: none;
    border-radius: 5px;
`