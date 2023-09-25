import styled from "styled-components"

export const Container = styled.div`
    
`

export const Content = styled.div`
    padding: 10px 32px 54px 32px;

    > .back-button{
        display: flex;
        align-items: center;
        justify-content: flex-start;

        height: 23px;

        a{
            font-size: 16px;
        }
        
        svg{
            width: 23px;
            height: 23px;
        }
    }
`

export const Form = styled.form`
    margin-top: 11px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 24px;

    > h1{
        font-family: "Poppins", sans-serif;
        font-size: 32px;
        font-style: normal;
        font-weight: 500;
    }    
`

export const UploadInput = styled.div`
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
            }
        }
    }
`