import styled from "styled-components"

export const Container = styled.button`
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