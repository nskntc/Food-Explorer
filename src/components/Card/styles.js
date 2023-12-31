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

    > .top-button{
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

            border-radius: 50%;
        }

        .title{
            font-family: "Poppins", sans-serif;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px; /* 171.429% */

            display: inline;
            white-space: nowrap;

            color: ${({theme}) => theme.COLORS.LIGHT_300};
        }
    }

    > p{
        display: none;
    }

    > .price{
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%; /* 16px */

        color: ${({theme}) => theme.COLORS.CAKE_100};
    }

    > .buttons{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 12px;

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
    }

    .hidden{
        display: none;
    }

   @media (min-width: 1200px){
        > p{
            display: block;

            font-size: 14px;
            font-weight: 400;
            line-height: 160%;

            text-align: center;

            color: ${({theme}) => theme.COLORS.LIGHT_400};
        }
    }
`