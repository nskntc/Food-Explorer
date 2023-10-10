import { AiOutlineClose } from "react-icons/ai"
import { useNavigate } from "react-router-dom"

import { Container } from "./styles"

import { InputSearch } from "../InputSearch"
import { Footer } from "../Footer"

import { useAuth } from "../../hooks/auth"

export const Menu = ({ $isadmin, active, onChange, ...rest }) => {
    const { signOut } = useAuth()
    const navigate = useNavigate()

    const handleSignOut = () => {
        signOut()
        navigate("/")
    }

    const handleToNew = () => {
        navigate('/new')
    }

    const handleCloseMenu = () => {
        active(false)
    }

    return(
        <Container $isvisible={active.toString()} {...rest}>
            <header>
                <button type="button" onClick={handleCloseMenu} >
                    <AiOutlineClose size={25} fill="white" />
                </button>

                <p>Menu</p>
            </header>

            <main>
                <InputSearch onChange={onChange} />

                <button type="button" className={$isadmin === "true" ? "" : "hidden"} onClick={handleToNew} >
                    <span>Novo Prato</span>
                </button>
                <button type="button" onClick={handleSignOut}>
                    <span>Sair</span>
                </button>
            </main>

            <Footer />
        </Container>
    )
}