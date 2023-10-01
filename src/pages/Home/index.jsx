import { Container } from "./styles"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

export const Home = () => {
    const $isadmin = "false"

    return(
        <Container>
            <Header $isadmin={$isadmin} />

            <main>
        
            </main>

            <Footer />
        </Container>
    )
}