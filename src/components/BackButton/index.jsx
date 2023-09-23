import { IoIosArrowBack } from "react-icons/io"

import { Container } from "./styles"

export const BackButton = ({...rest}) => {
    return(
        <Container {...rest}>
            <a href="#">
                <IoIosArrowBack fill="white" size={32} />
                voltar
            </a>
        </Container>
    )
}