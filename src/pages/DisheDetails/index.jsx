import { useNavigate } from "react-router-dom";

import { PiReceipt } from "react-icons/pi"
import { AiOutlinePlus } from "react-icons/ai"
import { AiOutlineMinus } from "react-icons/ai"

import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";

import Ravanelo from "../../assets/Ravanelo.png"

export const DisheDetails = () => {
    let $isadmin = "true"

    const navigate = useNavigate()

    const handleToEdit = () => {
        navigate("/edit")
    }

    return(
        <Container>
            <Header $isadmin={$isadmin} />

            <main>
                <BackButton className="back-button" />

                <div className="dishe">
                    <img src={Ravanelo} alt="Imagem do prato" />

                    <div className="dishe-informations">
                        <h1>Salada Ravaleno</h1>

                        <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>

                        <ul>
                            <li>alface</li>
                            <li>cebola</li>
                            <li>pão naan</li>
                            <li>pepino</li>
                            <li>rabanete</li>
                            <li>tomate</li>
                        </ul>

                        <Button title="Editar prato" className={$isadmin === "true" || "hidden"} onClick={handleToEdit} />

                        <div className={$isadmin === "true" ? "hidden" : "request-wrapper"}>
                            <button type="button" className="plus-minus"><AiOutlineMinus fill="white" size={27} /></button>
                            <span>01</span>
                            <button type="button" className="plus-minus"><AiOutlinePlus fill="white" size={27} /></button>

                            <Button id="request-button" title="incluir ∙ R$ 25,00" icon={PiReceipt} />
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </Container>
    )
}