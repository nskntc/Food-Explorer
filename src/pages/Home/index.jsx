import { Container } from "./styles"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Card } from "../../components/Card"

import homeDecoration from "../../assets/homeDecoration.png"
import Ravanelo from "../../assets/Ravanelo.png"

export const Home = () => {
    const $isadmin = "true"

    return(
        <Container>
            <Header $isadmin={$isadmin} />

            <main>
                <div className="decoration">
                    <img src={homeDecoration} alt="Decoration img" />

                    <h1>Sabores inigualáveis</h1>
                    <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                </div>

                <Card
                    title="Salada Ravanelo"
                    price="49,97"
                    src={Ravanelo}
                    $isadmin={$isadmin}
                />
            </main>

            <Footer />
        </Container>
    )
}