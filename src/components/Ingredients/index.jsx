import { Container } from "./styles"

export const Ingredients = ({ children, ...rest }) => {
    return(
        <Container {...rest} >
            <span>Ingredientes</span>
            <div className="content">
                {children}
            </div>
        </Container>
    )
}