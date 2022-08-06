import {SerializedStyles} from "@emotion/react";

export interface IHeaderLink {
    href: string,
    text: string,
    Icon?: JSX.Element,
    styleLink?: SerializedStyles,
    styleActiveLink?: SerializedStyles
}