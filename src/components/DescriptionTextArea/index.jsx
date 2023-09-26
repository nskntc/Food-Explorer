import { Container } from "./styles"

export const DescriptionTextArea = ({...rest}) => {
    return(
        <Container>
            <label htmlFor="description">Descrição</label>
            <textarea {...rest} name="description" id="description"></textarea>
        </Container>
    )
}