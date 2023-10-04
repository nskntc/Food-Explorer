import { Container, Form } from "./styles";
import { Link } from "react-router-dom"

import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { Button } from "../../components/Button";


export const SignUp = () => {
    return(
        <Container>
            <Logo className="logo" />

            <Form>
                <h1>Crie sua conta</h1>

                <Input 
                    id="Seu nome" 
                    placeholder="Exemplo: Maria da Silva"
                    type="text" 
                />

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

                <Button title="Criar conta" />

                <Link to="/">Já tenho uma conta</Link>
            </Form>
        </Container>
    )
}