import Receipt from "../../assets/Receipt.svg"
import List from "../../assets/List.svg"
import { GoSignOut } from "react-icons/go"

import { Container, Button } from "./styles";
import { Logo } from "../../components/Logo"
import { InputSearch } from "../InputSearch";


export const Header = () => {
    return(
        <Container>
            {<img src={List} alt="Icone de menu" className="list"/>}
            <Logo className="logo" />
            <InputSearch className="input-search" />
            <Button className="header-button">
                {<img src={Receipt} alt="Icone de recibo" className="receipt"/>}
                Pedidos (0)
            </Button>
            <GoSignOut fill="white" size={32} className="signout-button" />
            <div className="recibo-wrapper">
                {<img src={Receipt} alt="Icone de recibo" className="receipt"/>}
                <div className="num-requests">0</div>
            </div>
        </Container>
    )
}