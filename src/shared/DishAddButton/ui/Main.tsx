import React, {useState} from "react";
import {IDishAddButton} from "../interfaces/ui";
import {css} from "@emotion/react";
import {addDishToBasket} from "../../../entities/Basket";
import {stylesMuiButtonText} from "../../../../styles/modules/stylesMuiButtonText";
import {Button} from "@mui/material";
import ModifiersModalWindow from "./ModifiersModalWindow";

const Main: React.FC<IDishAddButton> = ({
    title,
    stylesButton = {},
    onClickAction,
    dish,
    basket,
    dispatchBasket,
    dispatchInformModalWindow
}) => {

    const [isShowModal, setIsShowModal] = useState(false)
    const modifierModalWindow =
        isShowModal &&
            <ModifiersModalWindow
                isShowModal={isShowModal}
                setIsShowModal={setIsShowModal}
                dish={dish}
                dispatchInformModalWindow={dispatchInformModalWindow}
                basket={basket}
                dispatchBasket={dispatchBasket}
            />
    const action = () => {
        if (dish.modifiers) setIsShowModal(true)
        else {
            addDishToBasket({dish, basket, dispatchBasket, dispatchInformModalWindow})
            if (onClickAction) onClickAction()
        }
    }

    return (
        <>
            <Button
                css={css(stylesButton)}
                onClick={action}
            >
                <span
                    css={css(stylesMuiButtonText.text)}
                >
                    {title}
                </span>
            </Button>
            {modifierModalWindow}
        </>
    )
}

export default Main