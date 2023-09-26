import { Container } from "./styles";

import { FiX } from "react-icons/fi"
import { FiPlus } from "react-icons/fi"

export const IngredientItem = ({ $isnew = "false", value, onClick, ...rest }) => {
    return(
        <Container $isnew={$isnew}>
            <input
                type="text"
                value={value}
                readOnly={$isnew === "true" ? false : true}
                {...rest}
            />

            <button
                type="button"
                onClick={onClick}
                className={$isnew === "true" ? 'button-add' : 'button-delete'}
            >
                {$isnew === "true" ? <FiPlus /> : <FiX />}
            </button>
        </Container>
    )
}
