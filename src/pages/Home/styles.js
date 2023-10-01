import styled from "styled-components"

export const Container = styled.div`
        display: grid;
        grid-template-rows: 114px 1fr 77px;
        grid-template-areas: 
        "header"
        "main"
        "footer";

        min-height: 100vh;
        width: 100%;

    > main{
        grid-area: main;

        .decoration{
            position: relative;

            margin: 30px 16px 62px 30px;
            padding: 36px 20px 20px 153px;

            background: ${({theme}) => theme.COLORS.GRADIENTS_200};

            h1{
                font-family: "Poppins", sans-serif;
                font-size: 18px;
                font-style: normal;
                font-weight: 600;
                line-height: 140%;

                display: inline;
                white-space: nowrap;
            }

            p{
                font-family: "Poppins", sans-serif;
                font-size: 12px;
                font-style: normal;
                font-weight: 400;
                line-height: 140%;
            }

            img{
                position: absolute;
                bottom: 0;
                left: -22px;

                width: 191px;
                height: 149px;
            }
        }
    }
`