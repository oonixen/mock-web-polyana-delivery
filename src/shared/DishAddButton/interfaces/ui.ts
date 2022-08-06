import {IDishActionParams} from "../../../entities/Basket/interfaces";
import {SerializedStyles} from "@emotion/react";
import React from "react";
import {Modifier, ModifierChildModifiersInner, ProductDetail, ProductForServerModifiersInner} from "../../../../api";

export interface IDishAddButton extends IDishActionParams {
    title: string,
    stylesButton?: SerializedStyles,
    onClickAction?: () => void
}

export interface IModifiersModalWindow extends IDishActionParams{
    isShowModal: boolean,
    setIsShowModal: React.Dispatch<boolean>
}

export interface IModifierSection {
    modifier: Modifier,
    serverModifiers: Array<ProductForServerModifiersInner>,
    setServerModifiers: React.Dispatch<Array<ProductForServerModifiersInner>>,
    dispatchInformModalWindow: React.Dispatch<any>
}

export interface IModifierLabel {
    childModifier: ModifierChildModifiersInner
}