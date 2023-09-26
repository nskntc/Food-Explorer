import { Container } from "./styles"

import { PiUploadSimpleBold } from "react-icons/pi"

export const UploadInput = ({...rest}) => {
    return(
        <Container {...rest} >
            <span>Imagem do prato</span>
            <div className="dishe-img-input">
                <label htmlFor="dishe-upload">
                    <PiUploadSimpleBold size={24} fill="white" />
                    
                    <span>Selecione Imagem</span>

                    <input type="file" id="dishe-upload" />
                </label>
            </div>
        </Container>
    )
}