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

                <Form>
                    <h1>Novo prato</h1>

                    <UploadInput />

                    <Input id="Nome" type="text" placeholder="Ex: Salada Ceasar" />

                    <CategorySelect />

                    <Ingredients>
                        <IngredientItem
                            value="Pão naan"
                        />

                        <IngredientItem
                            placeholder="Adicionar"
                            $isnew="true"
                        />
                    </Ingredients>

                    <Input id="Preço" type="text" placeholder="R$ 0,00" />

                    <DescriptionTextArea 
                        placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                    />

                    <Button title="Salvar Alterações" className="save-button" />
                </Form>
            </Content>

            <Footer />
        </Container>
    )
}