import React from "react";
import {IInputLayout} from "../interfaces/ui";
import {css} from "@emotion/react";
import {styles} from "../styles/inputLayout";


const InputLayout: React.FC<IInputLayout> = ({
    children,
    label,
    containerStyles = {}
}) => {
    return (
        <label
            css={css(styles.label, containerStyles)}
        >
            <p
                css={css(styles.p)}
            >
                {label}
            </p>
            {children}
        </label>
    )
}

export default InputLayout