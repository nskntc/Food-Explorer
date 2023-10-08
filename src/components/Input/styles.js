import styled from "styled-components"

export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 16px;

    > label{
        font-size: 16px;
        font-weight: 400;
        color: ${({theme}) => theme.COLORS.LIGHT_400};
    }

    > input {
        border: none;
        border-radius: 5px;

        display: flex;
        height: 48px;
        padding: 12px 14px;
        justify-content: center;
        align-items: center;
        align-self: stretch;

        color: ${({theme}) => theme.COLORS.LIGHT_700};

        background-color: ${({theme}) => theme.COLORS.DARK_900};
    }

    > input:focus{
        border: 1px solid ${({theme}) => theme.COLORS.LIGHT_100};
        transition: opacity 0.2s ease;
    }

    > input:focus::placeholder {
        opacity: 0;
        transition: opacity 0.2s ease;
    }
`