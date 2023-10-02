import { Container } from "./styles"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper/modules"

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

                {/* <Card title="Salada Ravanelo" price="49,97" src={Ravanelo} $isadmin={$isadmin} /> */}

                <div className="section">
                    <h1>Refeições</h1>

                    <Swiper
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                        slidesPerView="auto"
                        spaceBetween={32}
                        centeredSlides={true}
                    >
                        <SwiperSlide><Card title="Salada Ravanelo" price="49,97" src={Ravanelo} $isadmin={$isadmin} /></SwiperSlide>
                        <SwiperSlide><Card title="Salada Ravanelo" price="49,97" src={Ravanelo} $isadmin={$isadmin} /></SwiperSlide>
                        <SwiperSlide><Card title="Salada Ravanelo" price="49,97" src={Ravanelo} $isadmin={$isadmin} /></SwiperSlide>
                        <SwiperSlide><Card title="Salada Ravanelo" price="49,97" src={Ravanelo} $isadmin={$isadmin} /></SwiperSlide>
                    </Swiper>
                </div>
            </main>

            <Footer />
        </Container>
    )
}