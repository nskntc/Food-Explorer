import styled from "styled-components"

export const Container = styled.div`
    position: relative;

    > input{
        width: 100%;
        height: 48px;

        border: none;
        border-radius: 5px;
        padding: 16px 137px 16px 100px;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: ${({theme}) => theme.COLORS.DARK_900};

        color: ${({theme}) => theme.COLORS.LIGHT_700};
    }

    > input:focus{
        border: 1px solid ${({theme}) => theme.COLORS.LIGHT_100};
        transition: opacity 0.2s ease;
    }

    > input:focus::placeholder {
        opacity: 0;
        transition: opacity 0.2s ease;
    }

    > svg{
        position: absolute;
        top: 50%;
        left: 69px;
        transform: translateY(-50%);
    }
`