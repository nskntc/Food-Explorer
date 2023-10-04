import { IoIosArrowBack } from "react-icons/io"
import { useNavigate } from "react-router-dom"

import { Container } from "./styles"

export const BackButton = ({...rest}) => {
    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    }
    return(
        <Container {...rest}>
            <button type="button" onClick={handleBack}>
                <IoIosArrowBack fill="white" size={32} />
                voltar
            </button>
        </Container>
    )
}