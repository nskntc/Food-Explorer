import { BsChevronDown } from "react-icons/bs"

import { Container } from "./styles"

export const CategorySelect = () => {
    return(
        <Container>
            <label htmlFor="category">Categoria</label>

            <div className="select-wrapper">
                <select name="category" id="category">
                    <option value="meal">Refeição</option>
                    <option value="dessert">Sobremesa</option>
                    <option value="drink">Bebida</option>
                </select>
                <BsChevronDown size={24} fill="#C4C4CC" />
            </div>
        </Container>
    )
}