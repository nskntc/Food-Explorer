import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { Container, Content, Form } from "./styles"

import { Header } from "../../components/Header"
import { BackButton } from "../../components/BackButton"
import { Input } from "../../components/Input"
import { UploadInput } from "../../components/UploadInput"
import { CategorySelect } from "../../components/CategorySelect"
import { Ingredients } from "../../components/Ingredients"
import { IngredientItem } from "../../components/IngredientItem"
import { DescriptionTextArea } from "../../components/DescriptionTextArea"
import { Button } from "../../components/Button"
import { Footer } from "../../components/Footer"

import { useAuth } from "../../hooks/auth"

import { api } from "../../services/api"

export const Edit = () => {
    const { user } = useAuth()
    const $isadmin = user.roles === "admin" ? "true" : "false"
    
    const [imgFile, setImgFile] = useState(null)
    const [name, setName] = useState("")
    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState("")
    const [category, setCategory] = useState("meal")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const navigate = useNavigate()
    const params = useParams()

    const handleChangeImg = (event) => {
        const file = event.target.files[0]
        setImgFile(file)
    }

    const handleAddIngredient = () => {
        setIngredients(prevState => [...prevState, newIngredient]);
        setNewIngredient("")
    }

    const handleRemoveIngredient = (removed) => {
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== removed))
    }

    const handleEditDish = async() => {
        if(!name || !ingredients || !description || !category || !price || !imgFile) alert("Preencha todos os campos!")

        try{
            const editDishForm = new FormData()

            editDishForm.append("img", imgFile)
            editDishForm.append("name", name)
            editDishForm.append("category", category)
            editDishForm.append("ingredients", ingredients)
            editDishForm.append("price", price)
            editDishForm.append("description", description)

            console.log(imgFile)
            
            await api.put(`/dishes/${params.id}`, editDishForm)
            alert("Prato atualizado com sucesso!")

            navigate("/")
        } catch(error){
            error.response ? alert(error.response.data.message) : alert("Não foi possível cadastrar novo prato. Tente novamente!") 
        }
    }

    const handleDeleteDish = async() => {
        try{
            await api.delete(`/dishes/${params.id}`)
            alert("Prato deletado com sucesso!")
            navigate("/")
        } catch(error) {
            error.response ? alert(error.response.data.message) : alert("Não foi possível deletar prato. Tente novamente!")
        }
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

            <Content>
                <BackButton className="back-button" />

                <h1>Editar prato</h1>

                <Form>
                    <UploadInput 
                        id="upload-input" 
                        title="Selecione imagem para alterá-la" 
                        onChange={handleChangeImg}
                    />

                    <div className="nome-wrapper">
                        <Input 
                            id="Nome" 
                            type="text" 
                            placeholder={name} 
                            onChange={e => setName(e.target.value)}
                        />
                    </div>

                    <CategorySelect 
                        id="category-select" 
                        value={category}
                        onChange={e => setCategory(e.target.value)} 
                    />

                    <Ingredients id="ingredients">
                        {
                            ingredients && ingredients.map((ingredient, index) => {
                                return(
                                    <IngredientItem
                                        key={String(index)}
                                        value={ingredient}
                                        onClick={() => handleRemoveIngredient(ingredient)}
                                    />
                                )
                            })
                        }

                        <IngredientItem
                            placeholder="Adicionar"
                            $isnew="true"
                            value={newIngredient}
                            onChange={e => setNewIngredient(e.target.value)}
                            onClick={handleAddIngredient}
                        />
                    </Ingredients>

                    <div className="preco-wrapper">
                        <Input 
                            id="Preço" 
                            type="text" 
                            placeholder={Number(price).toFixed(2)} 
                            onChange={e => setPrice(e.target.value)}
                        />
                    </div>

                    <DescriptionTextArea 
                        placeholder={description}
                        id="description"
                        onChange={e => setDescription(e.target.value)}
                    />

                    <div className="edit-buttons">
                        <Button title="Excluir prato" className="delete-button" onClick={handleDeleteDish} />

                        <Button title="Salvar Alterações" className="save-button" onClick={handleEditDish} />
                    </div>
                </Form>
            </Content>

            <Footer />
        </Container>
    )
}