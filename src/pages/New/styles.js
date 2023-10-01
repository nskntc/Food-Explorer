import styled from "styled-components"

export const Container = styled.div`
    display: grid;
    grid-template-rows: 114px 1fr 77px;
    grid-template-areas: 
    "header"
    "content"
    "footer";

    min-height: 100vh;
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

    > h1{
        font-family: "Poppins", sans-serif;
        font-size: 32px;
        font-style: normal;
        font-weight: 500;
    }
    
    @media (min-width: 1200px){
        padding: 40px 125px 116px 125px;

        > .back-button{
            margin-bottom: 24px;

            > a{
                font-size: 24px;
                font-weight: 700;
                line-height: 140%; /* 33.6px */
            }

            svg{
                width: 32px;
                height: 32px;
            }
        }

        > h1{ 
            font-size: 32px;
            font-weight: 500;
            line-height: 140%; /* 44.8px */

            margin-bottom: 32px;
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

    .nome-wrapper{
        width: 100%;
    }

    .preco-wrapper{
        width: 100%;
    }
    
    input{
        background-color: ${({theme}) => theme.COLORS.DARK_800};
    }

    > .save-button{
        background-color: ${({theme}) => theme.COLORS.TOMATO_400};

        color: ${({theme}) => theme.COLORS.LIGHT_100};
    }

    @media (min-width: 1200px){

        display: grid;
        grid-template-columns: 229px repeat(4, 1fr);
        grid-template-rows: repeat(5, 1fr);
        grid-template-areas: 
        "upload-input Nome Nome category-select category-select"
        "ingredients ingredients ingredients ingredients Preço"
        "description description description description description"
        "description description description description description"
        "none none none none save-button";

        align-items: center;
        justify-content: center;

        gap: 32px;

        > #upload-input{
            grid-area: upload-input;
        }

        > .nome-wrapper{
            grid-area: Nome;
        }

        > #category-select{
            grid-area: category-select;
        }

        > #ingredients{
            grid-area: ingredients;
            width: 100%;
        }

        > .preco-wrapper{
            grid-area: Preço;
        }

        > #description{
            grid-area: description;
        }

        > .save-button{
            grid-area: save-button;
        }
    }
`