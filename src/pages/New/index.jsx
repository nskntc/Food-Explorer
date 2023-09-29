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

export const New = () => {
    return(
        <Container>
            <Header $isadmin="true" />

            <Content>
                <BackButton className="back-button" />

                <h1>Adicionar prato</h1>

                <Form>
                    <UploadInput id="upload-input" />

                    <div className="nome-wrapper">
                        <Input id="Nome" type="text" placeholder="Ex: Salada Ceasar"  />
                    </div>

                    <CategorySelect id="category-select" />

                    <Ingredients id="ingredients">
                        <IngredientItem
                            value="Pão naan"
                        />

                        <IngredientItem
                            value="Pão naan"
                        />

                        <IngredientItem
                            value="Pão naan"
                        />

                        <IngredientItem
                            value="Pão naan"
                        />

                        <IngredientItem
                            value="Pão naan"
                        />

                        <IngredientItem
                            value="Pão naan"
                        />

                        <IngredientItem
                            placeholder="Adicionar"
                            $isnew="true"
                        />

<IngredientItem
                            placeholder="Adicionar"
                            $isnew="true"
                        />

<IngredientItem
                            placeholder="Adicionar"
                            $isnew="true"
                        />

<IngredientItem
                            placeholder="Adicionar"
                            $isnew="true"
                        />

<IngredientItem
                            placeholder="Adicionar"
                            $isnew="true"
                        />
                    </Ingredients>

                    <div className="preco-wrapper">
                        <Input id="Preço" type="text" placeholder="R$ 0,00" />
                    </div>

                    <DescriptionTextArea 
                        placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                        id="description"
                    />

                    <Button title="Salvar Alterações" className="save-button" />
                </Form>
            </Content>

            <Footer />
        </Container>
    )
}