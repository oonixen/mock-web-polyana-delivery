import {css} from "@emotion/react";
import {styles} from "../styles/modifierLabel";
import {symbols} from "../../../app";
import React from "react";
import {IModifierLabel} from "../interfaces/ui";

const ModifierLabel: React.FC<IModifierLabel> = ({childModifier}) => {
    return (
        <span>
            {childModifier.name}
            {" "}
            <span
                css={css(styles.price)}
            >
                    {`+ ${childModifier.price} ${symbols.ruble}`}
                </span>
            </span>
    )
}

export default ModifierLabel