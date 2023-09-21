import { Container } from "./styles"

export const Button = ({title, ...rest}) => {
    return(
        <Container type="button" {...rest}>
            {title}
        </Container>
    )
}