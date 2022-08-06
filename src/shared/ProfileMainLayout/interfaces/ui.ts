import {IJsxChildren} from "../../../app";
import {SerializedStyles} from "@emotion/react";

export interface IProfileMainLayout extends IJsxChildren {
    title: string
}

export interface IHeaderCommonContent {
    stylesContainer?: SerializedStyles,
    isShowUserInfoFormLink?: boolean
}