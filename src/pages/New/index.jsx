import { Container, Content, Form } from "./styles"

import { Header } from "../../components/Header"
import { BackButton } from "../../components/BackButton"
import { Input } from "../../components/Input"
import { UploadInput } from "../../components/UploadInput"
import { CategorySelect } from "../../components/CategorySelect"
import { Ingredients } from "../../components/Ingredients"
import { IngredientItem } from "../../components/IngredientItem"

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
                </Form>
            </Content>
        </Container>
    )
}