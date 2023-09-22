import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    > h1{
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-weight: 700;
    }

    > p{
        color: ${({ theme }) => theme.COLORS.CAKE_100};
    }

    > .hidden{
        display: none;
    }
`