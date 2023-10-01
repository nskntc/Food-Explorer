import styled from "styled-components"

export const Container = styled.div`
        display: grid;
        grid-template-rows: 114px 1fr 77px;
        grid-template-areas: 
        "header"
        "main"
        "footer";

        min-height: 100vh;
        width: 100%;

    > main{
        grid-area: main;
    }
`