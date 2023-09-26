import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    width: 100%;

    > label{
        font-size: 16px;
        font-weight: 400;
        line-height: 100%;
        color: ${({theme}) => theme.COLORS.LIGHT_400};
    }

    > textarea{
        width: 100%;
        height: 172px;

        resize: vertical;

        background-color: ${({theme}) => theme.COLORS.DARK_800};

        border: none;
        border-radius: 5px;

        padding: 14px;

        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%; /* 16px */

        color: ${({theme}) => theme.COLORS.LIGHT_500};
    }

    > textarea:focus{
        border: 1px solid ${({theme}) => theme.COLORS.LIGHT_100};
        transition: opacity .2s ease;
    }
`