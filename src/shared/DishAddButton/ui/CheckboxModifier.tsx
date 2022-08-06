import React from "react";
import {IModifierSection} from "../interfaces/ui";
import {Checkbox, FormControlLabel, FormGroup} from "@mui/material";
import {isCheckedModifier, onChangeCheckbox} from "../model/functions";
import {css} from "@emotion/react";
import {styles} from "../styles/common";
import ModifierLabel from "./ModifierLabel";

const CheckboxModifier: React.FC<IModifierSection> = ({
    modifier,
    serverModifiers,
    setServerModifiers,
    dispatchInformModalWindow
}) => {

    return (
        <FormGroup>
            {
                modifier.childModifiers.map(childModifier => (
                    <FormControlLabel
                        key={childModifier.id}
                        checked={isCheckedModifier(serverModifiers, modifier, childModifier)}
                        control={<Checkbox/>}
                        css={css(styles.controlLabel)}
                        label={<ModifierLabel childModifier={childModifier}/>}
                        onChange={(event, checked) => onChangeCheckbox(
                            serverModifiers,
                            modifier,
                            checked,
                            childModifier,
                            setServerModifiers,
                            dispatchInformModalWindow
                        )}
                    />
                ))
            }
        </FormGroup>
    )
}

export default CheckboxModifier