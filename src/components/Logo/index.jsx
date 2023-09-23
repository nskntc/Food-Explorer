import logoImg from "../../assets/logo.svg"
import { Container } from "./styles"

export const Logo = ({$isadmin, ...rest}) => {
    return (
        <Container {...rest} >
            <div className="logo">
                <img src={logoImg} alt="Imagem da logo" />
                <h1>food explorer</h1>
            </div>
            <p className={$isadmin === "true" ? "admin-logo" : "hidden"} >admin</p>
        </Container>
    )
}