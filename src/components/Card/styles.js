import styled from "styled-components"

export const Container = styled.div`
    position: relative;

    width: 210px;
    height: 292px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;

    padding: 24px;

    border-radius: 8px;
    border: 1px solid ${({theme}) => theme.COLORS.DARK_300};

    background-color: ${({theme}) => theme.COLORS.DARK_200};

    .top-button{
        position: absolute;
        top: 16px;
        right: 16px;

        background: transparent;
        border: none;
    }

    > a{
        img{
            width: 88px;
            height: 88px;
        }
    }

    > .title{
        font-family: "Poppins", sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px; /* 171.429% */
    }

    > .price{
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%; /* 16px */

        color: ${({theme}) => theme.COLORS.CAKE_100};
    }

    .quantity-selector{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 14px;

        .plus-minus{
            background: transparent;
            border: none;
        }

        span{
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%; /* 16px */
        }
    }

    .hidden{
        display: none;
    }
`