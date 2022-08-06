import {IJsxChildren} from "../../app";
import {SerializedStyles} from "@emotion/react";

export interface IMainContainer extends IJsxChildren {
    styleContainer?: SerializedStyles,
    isStylesFilledSpaceBetweenTopAndFooter?: boolean,
    isStylesPageHorizontalPadding?: boolean,
    isStylesPageHeaderIndent?: boolean
}