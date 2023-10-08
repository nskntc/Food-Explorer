import { GoSignOut } from "react-icons/go"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Receipt from "../../assets/Receipt.svg"
import List from "../../assets/List.svg"

import { Container, Button } from "./styles";
import { Logo } from "../../components/Logo"
import { InputSearch } from "../InputSearch";
import { Menu } from "../Menu";

import { useAuth } from "../../hooks/auth";


export const Header = ({$isadmin, ...rest}) => {
    const [isVisible, setIsVisible] = useState(false)
    
    const { signOut } = useAuth()
    const navigate = useNavigate()

    const handleSignOut = () => {
        signOut()
    }

    const handleShowMenu = () => {
        setIsVisible(!isVisible);
    }

    const handleToNew = () => {
        navigate('/new')
    }

    return(
        <Container $isadmin={$isadmin} {...rest}>
            <button type="button" className="list-button" onClick={handleShowMenu} >
                {<img src={List} alt="Icone de menu" className="list"/>}
            </button>

            <Logo className="logo" $isadmin={$isadmin} />

            <InputSearch className="input-search" />

            <Button className={$isadmin === "true" ? "hidden" : "header-button"}>
                {<img src={Receipt} alt="Icone de recibo" className="receipt"/>}
                Pedidos (0)
            </Button>

            <Button className={$isadmin === "true" ? "new-request" : "hidden"} onClick={handleToNew} >
                Novo Prato
            </Button>

            <button type="button" className="signout-button" onClick={handleSignOut} >
                <GoSignOut fill="white" size={32} />
            </button>

            <div className="recibo-wrapper">
                <button type="button" className={$isadmin === "true" ? "hidden" : "visible"} >
                    {<img src={Receipt} alt="Icone de recibo" className="receipt"/>}
                    <div className="num-requests">0</div>
                </button>
            </div>

            {isVisible && <Menu active={setIsVisible} $isadmin={$isadmin} />}
        </Container>
    )
}