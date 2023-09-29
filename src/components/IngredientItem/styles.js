import styled from "styled-components"

export const Container = styled.div`
    height: 32px;
    min-width: 140px;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;

    background-color: ${({ theme, $isnew }) => $isnew === "true" ? "transparent" : theme.COLORS.LIGHT_600};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    border: ${({ theme, $isnew }) => $isnew === "true" ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};

    border-radius: 8px;
    padding-right: 16px;

    overflow-x: auto;
    white-space: nowrap;

    > button { 
        display: flex;
        border: none;
        background: transparent;

        overflow: hidden;
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    .button-add {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    > input {
        width: 100%;
        height: 100%;

        font-size: 16px;
        font-weight: 400;

        padding: 10px 16px;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        background: transparent !important;

        border: none;
        

        /* overflow: hidden; */

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
    }
`