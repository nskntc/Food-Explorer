import { Container } from "./styles"
import { HiMagnifyingGlass } from "react-icons/hi2"

export const InputSearch = ({ onChange, value, ...rest }) => {
    return(
        <Container {...rest} >
            <HiMagnifyingGlass fill="#C4C4CC" size={24} />
            <input type="text" placeholder="Busque por pratos ou ingredientes" onChange={onChange} value={value} />
        </Container>
    )
}