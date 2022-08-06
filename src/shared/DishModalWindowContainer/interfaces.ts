import {IJsxChildren} from "../../app";
import {SerializedStyles} from "@emotion/react";

export interface IDishModalWindowContainer extends IJsxChildren {
    sum: number,
    onClickAddButton: () => void
    stylesContainer?: SerializedStyles,
    Button?: JSX.Element
}