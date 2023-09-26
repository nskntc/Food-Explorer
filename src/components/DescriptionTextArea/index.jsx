import { Container } from "./styles"

export const DescriptionTextArea = ({id, ...rest}) => {
    return(
        <Container id={id} >
            <label htmlFor="description">Descrição</label>
            <textarea {...rest} name="description" id="description"></textarea>
        </Container>
    )
}