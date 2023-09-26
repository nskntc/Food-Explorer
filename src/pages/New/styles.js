import styled from "styled-components"

export const Container = styled.div`
    display: grid;
    grid-template-areas: 
    "header"
    "content"
    "footer";
`

export const Content = styled.div`
    grid-area: content;

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
    
    input{
        background-color: ${({theme}) => theme.COLORS.DARK_800};
    }

    > .save-button{
        background-color: ${({theme}) => theme.COLORS.TOMATO_400};

        color: ${({theme}) => theme.COLORS.LIGHT_100};
    }
`