import { Container } from "./styles"

export const Ingredients = ({ children }) => {
    return(
        <Container>
            <span>Ingredientes</span>
            <div className="content">
                {children}
            </div>
        </Container>
    )
}