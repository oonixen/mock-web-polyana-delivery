import {IHeaderText} from "./interface";
import React from "react";
import {css} from "@emotion/react";
import {styles} from "./styles";

const HeaderText: React.FC<IHeaderText> = ({text, textStyle = {}}) => {
    return (
        <span
            css={css(styles.span, textStyle)}
        >
            {text}
        </span>
    )
}

export default HeaderText