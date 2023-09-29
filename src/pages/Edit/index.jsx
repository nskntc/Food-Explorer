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

export const Edit = () => {
    return(
        <Container>
            <Header $isadmin="true" />

            <Content>
                <BackButton className="back-button" />

                <h1>Editar prato</h1>

                <Form>
                    <UploadInput id="upload-input" title="Selecione imagem para alterá-la" />

                    <div className="nome-wrapper">
                        <Input id="Nome" type="text" placeholder="Salada Ceasar"  />
                    </div>

                    <CategorySelect id="category-select" />

                    <Ingredients id="ingredients">
                        <IngredientItem
                            value="Pão naan"
                        />

                        <IngredientItem
                            placeholder="Adicionar"
                            $isnew="true"
                        />
                    </Ingredients>

                    <div className="preco-wrapper">
                        <Input id="Preço" type="text" placeholder="R$ 40,00" />
                    </div>

                    <DescriptionTextArea 
                        placeholder="A Salada César é uma opção refrescante para o verão."
                        id="description"
                    />

                    <div className="edit-buttons">
                        <Button title="Excluir prato" className="delete-button" />

                        <Button title="Salvar Alterações" className="save-button" />
                    </div>
                </Form>
            </Content>

            <Footer />
        </Container>
    )
}