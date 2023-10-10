import { useState, useEffect } from "react"

import { Container } from "./styles"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper/modules"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Card } from "../../components/Card"

import homeDecoration from "../../assets/homeDecoration.png"

import { useAuth } from "../../hooks/auth"

import { api } from "../../services/api"

export const Home = () => {
    const { user } = useAuth()

    const $isadmin = user.roles === "admin" ? "true" : "false"

    const [dishes, setDishes] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        const fetchDishes = async() => {
            const response = await api.get(`/dishes?name=${search}`)
            setDishes(response.data)
        }

        fetchDishes()
    }, [search])

    return(
        <Container>
            <Header $isadmin={$isadmin} onChange={e => setSearch(e.target.value)} />

            <main>
                <div className="decoration">
                    <img src={homeDecoration} alt="Decoration img" />

                    <h1>Sabores inigualáveis</h1>
                    <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                </div>

                {
                    (dishes.filter(dish => dish.category === "meal").length !== 0) &&
                    <div className="section">
                        <h1>Refeições</h1>

                        <Swiper
                            navigation={true}
                            modules={[Navigation]}
                            className="mySwiper"
                            slidesPerView="auto"
                            spaceBetween={16}
                            centeredSlides={true}
                        >
                            <div className="shadow-1"></div>
                            <div className="shadow-2"></div>
                            
                            {
                                dishes.filter(dish => dish.category === "meal").map((meal) => (
                                    <SwiperSlide key={String(meal.id)}>
                                        <Card 
                                            id={meal.id}
                                            title={meal.name} 
                                            price={Number(meal.price).toFixed(2)} 
                                            src={`${api.defaults.baseURL}/files/${meal.img}`}
                                            $isadmin={$isadmin} 
                                        />
                                    </SwiperSlide>
                                ))
                            }
                            
                        </Swiper>
                    </div>
                }

                {
                    (dishes.filter(dish => dish.category === "dessert").length !== 0) &&
                    <div className="section">
                        <h1>Sobremesas</h1>

                        <Swiper
                            navigation={true}
                            modules={[Navigation]}
                            className="mySwiper"
                            slidesPerView="auto"
                            spaceBetween={16}
                            centeredSlides={true}
                        >
                            <div className="shadow-1"></div>
                            <div className="shadow-2"></div>
                            
                            {
                                dishes.filter(dish => dish.category === "dessert").map((dessert) => (
                                    <SwiperSlide key={String(dessert.id)}>
                                        <Card 
                                            id={dessert.id}
                                            title={dessert.name} 
                                            price={Number(dessert.price).toFixed(2)} 
                                            src={`${api.defaults.baseURL}/files/${dessert.img}`}
                                            $isadmin={$isadmin} 
                                        />
                                    </SwiperSlide>
                                ))
                            }
                            
                        </Swiper>
                    </div>
                }

                {
                    (dishes.filter(dish => dish.category === "drink").length !== 0) &&
                    <div className="section">
                        <h1>Bebidas</h1>

                        <Swiper
                            navigation={true}
                            modules={[Navigation]}
                            className="mySwiper"
                            slidesPerView="auto"
                            spaceBetween={16}
                            centeredSlides={true}
                        >
                            <div className="shadow-1"></div>
                            <div className="shadow-2"></div>
                            
                            {
                                dishes.filter(dish => dish.category === "drink").map((drink) => (
                                    <SwiperSlide key={String(drink.id)}>
                                        <Card 
                                            id={drink.id}
                                            title={drink.name} 
                                            price={Number(drink.price).toFixed(2)} 
                                            src={`${api.defaults.baseURL}/files/${drink.img}`}
                                            $isadmin={$isadmin} 
                                        />
                                    </SwiperSlide>
                                ))
                            }
                            
                        </Swiper>
                    </div>
                }
            </main>

            <Footer />
        </Container>
    )
}