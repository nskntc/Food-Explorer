import styled from "styled-components"

export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 16px;

    > label{
        font-size: 16px;
        font-weight: 400;

        color: ${({theme}) => theme.COLORS.LIGHT_400};
    }

    > .select-wrapper{
        position: relative;

        width: 100%;
        height: 48px;

        border: none;
        border-radius: 5px;

        background-color: ${({theme}) => theme.COLORS.DARK_900};

        select{
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;

            width: 100%;
            height: 48px;

            padding-left: 16px;
            padding-right: 16px;

            font-size: 14px;
            font-weight: 400;
            line-height: 160%;
            color: ${({theme}) => theme.COLORS.LIGHT_400};

            background: transparent;

            border: none;
            border-radius: 5px;

            cursor: pointer;

            option{
                background-color: ${({theme}) => theme.COLORS.DARK_900};
                border-radius: 5px;
            }
        }

        select:focus{
            border: 1px solid ${({theme}) => theme.COLORS.LIGHT_100};

            outline: none;

            transition: opacity 0.2s ease;
        }

        svg{
            position: absolute;
            top: 12px;
            right: 16px;
        }
    }
`