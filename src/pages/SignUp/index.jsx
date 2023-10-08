import { useState } from "react";
import { Container, Form } from "./styles";
import { Link, useNavigate } from "react-router-dom"

import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { Button } from "../../components/Button";

import { api } from "../../services/api"


export const SignUp = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleSignUp = async() => {
        if(!name || !email || !password) alert("Preencha todos os campos!")

        try{
            await api.post("/users", { name, email, password })
            alert("Usuário cadastrado com sucesso!")
            navigate("/")
        } catch(error){
            error.response ? alert(error.response.data.message) : alert("Não foi possível cadastrar usuário. Tente novamente!")
        }
    }

    return(
        <Container>
            <Logo className="logo" />

            <Form>
                <h1>Crie sua conta</h1>

                <Input 
                    id="Seu nome" 
                    placeholder="Exemplo: Maria da Silva"
                    type="text"
                    onChange={e => setName(e.target.value)} 
                />

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

                <Button title="Criar conta" onClick={handleSignUp} />

                <Link to="/">Já tenho uma conta</Link>
            </Form>
        </Container>
    )
}