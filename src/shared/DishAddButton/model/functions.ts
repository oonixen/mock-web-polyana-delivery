import {getIndexByParam} from "../../../features/Array";
import {
    addDishToBasket,
    addServerChildModifier, checkModifiers,
    createServerModifier,
    deleteServerModifier,
    setServerModifiersWithUpdateLink
} from "../../../entities/Basket";
import {showInformModalWindow} from "../../../processes/Context";
import {Modifier, ModifierChildModifiersInner, ProductDetail, ProductForServerModifiersInner} from "../../../../api";
import React from "react";
import {IPayload} from "../../../processes/Context/Basket/interfaces";

export function onChangeCheckbox (
    serverModifiers: Array<ProductForServerModifiersInner>,
    modifier: Modifier,
    checked:boolean,
    childModifier: ModifierChildModifiersInner,
    setServerModifiers: React.Dispatch<Array<ProductForServerModifiersInner>>,
    dispatchInformModalWindow: React.Dispatch<any>
) {

    const index = getIndexByParam(serverModifiers, modifier.id, v => v.id)

    //delete modifier
    if (!checked && index !== -1) {
        deleteServerModifier(serverModifiers[index], serverModifiers, index, childModifier)
        return setServerModifiersWithUpdateLink(setServerModifiers, serverModifiers)
    }

    //add modifier
    if (index === -1)
        return setServerModifiersWithUpdateLink(
            setServerModifiers,
            [...serverModifiers, createServerModifier(modifier, childModifier)]
        )

    //add child modifier to modifier
    if (serverModifiers[index].childModifiers.length < modifier.maxAmount) {
        addServerChildModifier(serverModifiers[index], childModifier)
        return  setServerModifiersWithUpdateLink(setServerModifiers, serverModifiers)
    }

    showInformModalWindow(dispatchInformModalWindow, `Максимальное количество дополнительных позиций ${modifier.maxAmount}`)
}

export function isCheckedModifier (
    serverModifiers: Array<ProductForServerModifiersInner>,
    modifier: Modifier,
    childModifier: ModifierChildModifiersInner,
) {

    const index = getIndexByParam(serverModifiers, modifier.id, v => v.id)

    if (index === -1) return false

    const modifierIndex = getIndexByParam(serverModifiers[index].childModifiers, childModifier.id, v => v.id)

    return modifierIndex !== -1
}

export function addDishWithModifier (
    serverModifiers: Array<ProductForServerModifiersInner>,
    dispatchInformModalWindow: React.Dispatch<any>,
    setIsShowModal: React.Dispatch<boolean>,
    dish: ProductDetail,
    basket: IPayload,
    dispatchBasket: React.Dispatch<any>
) {
    const isChecked = checkModifiers(serverModifiers)

    if (isChecked !== true) dispatchInformModalWindow(isChecked)

    addDishToBasket({dish, basket, dispatchBasket, dispatchInformModalWindow, serverModifiers})
    setIsShowModal(false)
}

export function onChangeRadioGroup (
    serverModifiers: Array<ProductForServerModifiersInner>,
    modifier: Modifier,
    indexChild: number,
    setServerModifiers: React.Dispatch<Array<ProductForServerModifiersInner>>,
)
{
    const indexModifier = getIndexByParam(serverModifiers, modifier.id, v => v.id)
    const childModifier = modifier.childModifiers[indexChild]
    const createdModifier = createServerModifier(modifier, childModifier)

    if (indexModifier !== -1)
        deleteServerModifier(serverModifiers[indexModifier], serverModifiers, indexModifier, childModifier)

    setServerModifiersWithUpdateLink(
        setServerModifiers,
        [...serverModifiers, createdModifier]
    )
}