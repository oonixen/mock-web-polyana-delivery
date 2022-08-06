import {css} from "@emotion/react";
import {styles} from "../styles/submitButton";
import {Button} from "@mui/material";
import {stylesMuiButtonText} from "../../../../styles/modules/stylesMuiButtonText";
import React from "react";
import {ISubmitButton} from "../interfaces/ui";

const SubmitButton: React.FC<ISubmitButton> = ({
    checkedResponse
}) => {

    let text = "Оформить заказ"
    if (checkedResponse) text = `${text} на ${checkedResponse.orderSum} Р`

    return (
        <div
            css={css(styles.orderButtonContainer)}
        >
            <Button
                css={css(styles.orderButton)}
                type={"submit"}
            >
                    <span
                        css={css(stylesMuiButtonText.text)}
                    >
                        {text}
                    </span>
            </Button>
        </div>
    )
}

export default SubmitButton