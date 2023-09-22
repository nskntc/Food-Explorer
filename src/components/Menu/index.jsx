import { AiOutlineClose } from "react-icons/ai"

import { Container } from "./styles"

import { InputSearch } from "../InputSearch"

export const Menu = ({active, ...rest}) => {
    const handleCloseMenu = () => {
        active(false)
    }

    return(
        <Container isVisible={active} {...rest}>
            <header>
                <button type="button" onClick={handleCloseMenu} >
                    <AiOutlineClose size={25} fill="white" />
                </button>

                <p>Menu</p>
            </header>

            <main>
                <InputSearch />

                <button type="button">
                    <span>Sair</span>
                </button>
            </main>
        </Container>
    )
}