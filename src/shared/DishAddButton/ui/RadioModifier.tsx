import {FormControlLabel, Radio, RadioGroup} from "@mui/material";
import React from "react";
import {IModifierSection} from "../interfaces/ui";
import {onChangeRadioGroup} from "../model/functions";
import ModifierLabel from "./ModifierLabel";
import {css} from "@emotion/react";
import {styles} from "../styles/common";

const RadioModifier: React.FC<IModifierSection> = ({
    modifier,
    serverModifiers,
    setServerModifiers,
    dispatchInformModalWindow
}) => {
    return (
        <RadioGroup
            onChange={(event, indexChild) => {
                onChangeRadioGroup(
                    serverModifiers,
                    modifier,
                    Number(indexChild),
                    setServerModifiers
                )
            }}
        >
            {
                modifier.childModifiers.map((childModifier, index) => (
                    <FormControlLabel
                        key={childModifier.id}
                        css={css(styles.controlLabel)}
                        control={<Radio/>}
                        label={<ModifierLabel childModifier={childModifier}/>}
                        value={index}
                    />
                ))
            }
        </RadioGroup>
    )
}

export default RadioModifier