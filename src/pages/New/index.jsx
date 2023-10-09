import { useState } from "react"
import { useNavigate } from "react-router-dom"

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

import { api } from "../../services/api"

export const New = () => {
    const [imgFile, setImgFile] = useState(null)
    const [name, setName] = useState("")
    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState("")
    const [category, setCategory] = useState("meal")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const navigate = useNavigate()

    const handleSetImgFile = (event) => {
        const file = event.target.files[0]
        setImgFile(file)
    }

    const handleAddIngredient = () => {
        setIngredients(prevState => [...prevState, newIngredient]);
        setNewIngredient("");
    }

    const handleRemoveIngredient = (removed) => {
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== removed))
    }

    const handleNewDish = async() => {
        if(!name || !ingredients || !description || !category || !price || !imgFile) alert("Preencha todos os campos!")

        try{
            const newDishForm = new FormData();

            newDishForm.append("img", imgFile);
            newDishForm.append("name", name);
            newDishForm.append("category", category);
            newDishForm.append("ingredients", ingredients);
            newDishForm.append("price", price);
            newDishForm.append("description", description);
            
            await api.post("/dishes", newDishForm)
            alert("Prato criado com sucesso!")

            navigate(-1)
        } catch(error){
            error.response ? alert(error.response.data.message) : alert("Não foi possível cadastrar novo prato. Tente novamente!") 
        }
    }

    return(
        <Container>
            <Header $isadmin="true" />

            <Content>
                <BackButton className="back-button" />

                <h1>Adicionar prato</h1>

                <Form>
                    <UploadInput 
                        id="upload-input" 
                        title="Selecione imagem" 
                        onChange={handleSetImgFile} 
                    />

                    <div className="nome-wrapper">
                        <Input 
                            id="Nome" 
                            type="text" 
                            placeholder="Ex: Salada Ceasar" 
                            onChange={e => setName(e.target.value)}  
                        />
                    </div>

                    <CategorySelect 
                        id="category-select" 
                        onChange={e => setCategory(e.target.value)} 
                    />

                    <Ingredients id="ingredients">
                        {
                            ingredients.map((ingredient, index) => {
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
                            placeholder="R$ 0,00" 
                            onChange={e => setPrice(e.target.value)}
                        />
                    </div>

                    <DescriptionTextArea 
                        placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                        id="description"
                        onChange={e => setDescription(e.target.value)}
                    />

                    <Button 
                        title="Salvar Alterações" 
                        className="save-button"
                        onClick={handleNewDish}  
                    />
                </Form>
            </Content>

            <Footer />
        </Container>
    )
}