import logoImg from "../../assets/logo.svg"
import { Container } from "./styles"

export const Logo = ({isAdmin = false, ...rest}) => {
    return (
        <Container {...rest} >
            <img src={logoImg} alt="Imagem da logo" />
            <h1>food explorer</h1>
            <p className={isAdmin ? "admin-logo" : "hidden"} >admin</p>
        </Container>
    )
}