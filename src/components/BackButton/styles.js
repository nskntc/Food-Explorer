import styled from "styled-components"

export const Container = styled.div`
    > button{
        width: 100%;

        text-align: left;

        font-family: "Poppins", sans-serif;
        font-size: 24px;
        font-weight: 500;
        line-height: 140%; 
        text-align: center;

        display: flex;
        align-items: center;
        justify-content: flex-start;

        color: ${({theme}) => theme.COLORS.LIGHT_300};

        background: transparent;
        border: none;
    }
`