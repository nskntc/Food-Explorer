import { Container, Form } from "./styles"
import { Link } from "react-router-dom"

import { Logo } from "../../components/Logo"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export const SignIn = () => {
    return(
        <Container>
            <Logo className="logo" />

            <Form>
                <h1>Faça login</h1>

                <Input 
                    id="Email" 
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                    type="text" 
                />

                <Input 
                    id="Senha" 
                    placeholder="No mínimo 6 caracteres"
                    type="password" 
                />

                <Button title="Entrar" />

                <Link to="/register">Criar uma conta</Link>
            </Form>
        </Container>
    )
}