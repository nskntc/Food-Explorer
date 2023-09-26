import styled from "styled-components"

export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 16px;

    > span{
        font-size: 16px;
        font-weight: 400;
        color: ${({theme}) => theme.COLORS.LIGHT_400};
    }

    > .content{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 16px;

        overflow: scroll;
        white-space: nowrap;

        height: 48px;

        background-color: ${({theme}) => theme.COLORS.DARK_800};

        border-radius: 5px;

        padding: 8px;
    }
`