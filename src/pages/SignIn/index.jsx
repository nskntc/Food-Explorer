import { useState } from "react"

import { Container, Form } from "./styles"
import { Link } from "react-router-dom"

import { Logo } from "../../components/Logo"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { useAuth } from "../../hooks/auth"

export const SignIn = () => {
    const { signIn } = useAuth()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSignIn = () => {
        signIn({ email, password })
    }

    return(
        <Container>
            <Logo className="logo" />

            <Form>
                <h1>Faça login</h1>

                <Input 
                    id="Email" 
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                    type="text" 
                    onChange={e => setEmail(e.target.value)}
                />

                <Input 
                    id="Senha" 
                    placeholder="No mínimo 6 caracteres"
                    type="password" 
                    onChange={e => setPassword(e.target.value)}
                />

                <Button title="Entrar" onClick={handleSignIn} />

                <Link to="/register">Criar uma conta</Link>
            </Form>
        </Container>
    )
}