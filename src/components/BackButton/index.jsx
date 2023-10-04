import { IoIosArrowBack } from "react-icons/io"
import { Link } from "react-router-dom"

import { Container } from "./styles"

export const BackButton = ({...rest}) => {
    return(
        <Container {...rest}>
            <Link to="/">
                <IoIosArrowBack fill="white" size={32} />
                voltar
            </Link>
        </Container>
    )
}