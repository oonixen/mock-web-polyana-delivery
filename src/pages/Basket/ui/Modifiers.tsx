import React from "react";
import {IModifiers} from "../interfaces/ui";
import {getModifiersName} from "../model/functions";
import {css} from "@emotion/react";
import {styles} from "../styles/modifiers";

const Modifiers: React.FC<IModifiers> = ({modifiers}) => {

    const modifiersNames = getModifiersName(modifiers)

    return (
        <div>
            {
                modifiersNames.map((modifierName, index) => (
                    <p
                        key={index}
                        css={css(styles.text)}
                    >
                        {modifierName}
                    </p>
                ))
            }
        </div>
    )
}

export default Modifiers