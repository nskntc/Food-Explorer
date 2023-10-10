import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"

import { PiReceipt } from "react-icons/pi"
import { AiOutlinePlus } from "react-icons/ai"
import { AiOutlineMinus } from "react-icons/ai"

import { Container } from "./styles";

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { BackButton } from "../../components/BackButton"
import { Button } from "../../components/Button"

import Ravanelo from "../../assets/Ravanelo.png"

import { useAuth } from "../../hooks/auth"

import { api } from "../../services/api"

export const DisheDetails = () => {
    const { user } = useAuth()

    let $isadmin = user.roles === "admin" ? "true" : "false"

    const navigate = useNavigate()
    const params = useParams()

    const [imgFile, setImgFile] = useState(null)
    const [name, setName] = useState("")
    const [ingredients, setIngredients] = useState([])
    const [category, setCategory] = useState("meal")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const img = `${api.defaults.baseURL}/files/${imgFile}`

    const handleToEdit = () => {
        navigate(`/edit/${params.id}`)
    }

    useEffect(() => {
        const fetchDish = async() => {
            try{
                const response = await api.get(`/dishes/${params.id}`)
                const dish = response.data

                setImgFile(dish.img)
                setName(dish.name)
                setIngredients(dish.ingredients.map(ingredient => ingredient.name))
                setCategory(dish.category)
                setPrice(dish.price)
                setDescription(dish.description)
            } catch(error){
                error.response ? alert(error.response.data.message) : alert("Não foi possivel carregar o prato. Tente Novamente!")
            }
        }

        fetchDish()
    }, [])

    return(
        <Container>
            <Header $isadmin={$isadmin} />

            <main>
                <BackButton className="back-button" />

                <div className="dishe">
                    <img src={img} alt="Imagem do prato" />

                    <div className="dishe-informations">
                        <h1>{name}</h1>

                        <p>{description}</p>

                        <ul>
                            {
                                ingredients.map((ingredient, index) => {
                                    return(
                                        <li key={String(index)} >{ingredient}</li>
                                    )
                                })
                            }
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