import { AiOutlineClose } from "react-icons/ai"
import { useNavigate } from "react-router-dom"

import { Container } from "./styles"

import { InputSearch } from "../InputSearch"
import { Footer } from "../Footer"

export const Menu = ({$isadmin, active, ...rest}) => {
    const navigate = useNavigate()

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
                <InputSearch />

                <button type="button" className={$isadmin === "true" ? "" : "hidden"} onClick={handleToNew} >
                    <span>Novo Prato</span>
                </button>
                <button type="button">
                    <span>Sair</span>
                </button>
            </main>

            <Footer />
        </Container>
    )
}