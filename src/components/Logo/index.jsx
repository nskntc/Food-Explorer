import logoImg from "../../assets/logo.svg"
import { Container } from "./styles"

export const Logo = ({...rest}) => {
    return (
        <Container {...rest} >
            <img src={logoImg} alt="Imagem da logo" />
            <h1>food explorer</h1>
            <p className="hidden">admin</p>
        </Container>
    )
}