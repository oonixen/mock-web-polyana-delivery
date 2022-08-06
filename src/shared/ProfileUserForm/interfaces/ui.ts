import {User} from "../../../../api";
import {Dispatch, HTMLInputTypeAttribute} from "react";
import {SerializedStyles} from "@emotion/react";

export interface IProfileUserForm {
    styleContainer?: SerializedStyles
}

export interface IInput {
    type: HTMLInputTypeAttribute,
    value: string,
    title: string,
    onChange?: (value:string) => any
    disabled?: boolean
    subtitle?: string,
}

export interface IForm {
    user: User,
    dispatchUser: Dispatch<any>
}