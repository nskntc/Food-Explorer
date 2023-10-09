import { Container } from "./styles"

import { PiUploadSimpleBold } from "react-icons/pi"

export const UploadInput = ({title, onChange, ...rest}) => {
    return(
        <Container {...rest} >
            <span>Imagem do prato</span>
            <div className="dishe-img-input">
                <label htmlFor="dishe-upload">
                    <PiUploadSimpleBold size={24} fill="white" />
                    
                    <span>{title}</span>

                    <input type="file" id="dishe-upload" onChange={onChange} />
                </label>
            </div>
        </Container>
    )
}