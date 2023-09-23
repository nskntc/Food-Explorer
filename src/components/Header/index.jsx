import { GoSignOut } from "react-icons/go"
import { useState } from "react";

import Receipt from "../../assets/Receipt.svg"
import List from "../../assets/List.svg"

import { Container, Button } from "./styles";
import { Logo } from "../../components/Logo"
import { InputSearch } from "../InputSearch";
import { Menu } from "../Menu";


export const Header = ({$isadmin, ...rest}) => {
    const [isVisible, setIsVisible] = useState(false)

    const handleShowMenu = () => {
        setIsVisible(!isVisible);
    }

    return(
        <Container $isadmin={$isadmin} {...rest}>
            <button type="button" className="list-button" onClick={handleShowMenu} >
                {<img src={List} alt="Icone de menu" className="list"/>}
            </button>

            <Logo className="logo" $isadmin={$isadmin} />

            <InputSearch className="input-search" />

            <Button className="header-button">
                {<img src={Receipt} alt="Icone de recibo" className="receipt"/>}
                Pedidos (0)
            </Button>

            <button type="button" className="signout-button" >
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