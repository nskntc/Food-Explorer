import styled from "styled-components"

export const Container = styled.div`
    width: 100%;

    > span{
        font-family: "Roboto", sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%; /* 16px */

        color: ${({theme}) => theme.COLORS.LIGHT_300};
    }

    > .dishe-img-input{
        position: relative;
        
        width: 100%;
        height: 48px;

        background-color: ${({theme}) => theme.COLORS.DARK_800};

        border-radius: 8px;

        align-self: stretch;

        margin-top: 16px;

        label {
            display: flex;
            align-items: center;
            justify-content: center;

            position: absolute;
            top: 12px;
            left: 32px;

            cursor: pointer;

            input {
                display: none;
            }

            span{
                margin-left: 8px;

                font-family: "Poppins", sans-serif;
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: 24px;

                color: ${({theme}) => theme.COLORS.LIGHT_100};

                display: inline;
                white-space: nowrap;
            }
        }
    }
`