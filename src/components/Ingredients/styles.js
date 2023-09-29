import styled from "styled-components"

export const Container = styled.div`
    width: calc(100vw - 64px);

    display: flex;
    flex-direction: column;
    gap: 16px;

    /* border: 1px solid white; */
    
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

        overflow-x: scroll;
        overflow-y: hidden;
        white-space: nowrap;

        &::-webkit-scrollbar {
            width: 100px;
            height: 5px;
        }

        &::-webkit-scrollbar-track {
            background: transparent;
        }

        &::-webkit-scrollbar-thumb {
            background-color: ${({theme}) => theme.COLORS.LIGHT_700};
            border-radius: 20px;
            border: none;
        }

        height: 48px;

        background-color: ${({theme}) => theme.COLORS.DARK_800};

        border-radius: 5px;

        padding: 8px;
    }
`