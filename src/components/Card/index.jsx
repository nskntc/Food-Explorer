import { Container } from "./styles"

import { AiOutlineHeart, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { PiPencilSimple } from "react-icons/pi"

import { Button } from "../Button"

export const Card = ({src, price, title, $isadmin, ...rest}) => {
    return(
        <Container {...rest}>
            <button 
                type="button" 
                className="top-button"
            >
                {$isadmin === "true" ? <PiPencilSimple fill="white" size={24} /> : <AiOutlineHeart fill="white" size={24} />}
            </button>

            <a href="#"><img src={src} alt="Imagem do prato" /></a>

            <h2 className="title">{title} &gt;</h2>

            <span className="price" >R$ {price}</span>

            <div className={$isadmin === "true" ? "hidden" : "quantity-selector"}>
                <button type="button" className="plus-minus"><AiOutlineMinus fill="white" size={24} /></button>
                <span>01</span>
                <button type="button" className="plus-minus"><AiOutlinePlus fill="white" size={24} /></button>
            </div>

            {$isadmin === "true" || <Button title="incluir" />}
        </Container>
    )
}