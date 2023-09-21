import { Container } from "./styles"

export const Input = ({id, ...rest}) => {
    return(
        <Container>
            <label htmlFor={id}>{id}</label>
            <input id={id} {...rest}/>
        </Container>
    )
}