import { PiUploadSimpleBold } from "react-icons/pi"

import { Container, Content, Form, UploadInput } from "./styles"

import { Header } from "../../components/Header"
import { BackButton } from "../../components/BackButton"
import { Input } from "../../components/Input"

export const New = () => {
    return(
        <Container>
            <Header $isadmin="true" />

            <Content>
                <BackButton className="back-button" />

                <Form>
                    <h1>Novo prato</h1>

                    <UploadInput>
                        <span>Imagem do prato</span>
                        <div className="dishe-img-input">
                            <label htmlFor="dishe-upload">
                                <PiUploadSimpleBold size={24} fill="white" />
                                
                                <span>Selecione Imagem</span>

                                <input type="file" id="dishe-upload" />
                            </label>
                        </div>
                    </UploadInput>
                </Form>
            </Content>
        </Container>
    )
}