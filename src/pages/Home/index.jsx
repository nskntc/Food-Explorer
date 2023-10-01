import { Container } from "./styles"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

import homeDecoration from "../../assets/homeDecoration.png"

export const Home = () => {
    const $isadmin = "false"

    return(
        <Container>
            <Header $isadmin={$isadmin} />

            <main>
                <div className="decoration">
                    <img src={homeDecoration} alt="Decoration img" />

                    <h1>Sabores inigualáveis</h1>
                    <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                </div>


            </main>

            <Footer />
        </Container>
    )
}