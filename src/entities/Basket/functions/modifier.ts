import {
    Modifier,
    ModifierChildModifiersInner,
    ProductForServerModifiersInner,
    ProductForServerModifiersInnerChildModifiersInner
} from "../../../../api";
import React from "react";
import {getIndexByParam} from "../../../features/Array";
import {sortWithParam} from "../../../features/Sorting";

export function createServerModifier (
    modifier: Modifier,
    childModifier: ModifierChildModifiersInner
) : ProductForServerModifiersInner {
    return {
        id: modifier.id,
        name: modifier.name,
        minAmount: modifier.minAmount,
        maxAmount: modifier.maxAmount,
        childModifiers: [createServerChildModifier(childModifier)]
    }
}

export function addServerChildModifier (
    serverModifier: ProductForServerModifiersInner,
    childModifier: ModifierChildModifiersInner
)
{
    serverModifier.childModifiers.push(createServerChildModifier(childModifier))
}

export function deleteServerModifier (
    serverModifier: ProductForServerModifiersInner,
    serverModifiers: Array<ProductForServerModifiersInner>,
    deleteIndex: number,
    childModifier: ModifierChildModifiersInner
)
{
    if (serverModifier.childModifiers.length === 1) serverModifiers.splice(deleteIndex, 1)
    else {
        const index = getIndexByParam(serverModifier.childModifiers, childModifier.id, v => v.id)
        if (index !== -1) serverModifier.childModifiers.splice(index, 1)
    }
}

export function setServerModifiersWithUpdateLink (
    setServerModifiers: React.Dispatch<Array<ProductForServerModifiersInner>>,
    serverModifiers: Array<ProductForServerModifiersInner>,
) {
    setServerModifiers(JSON.parse(JSON.stringify(serverModifiers)))
}

export function getPriceModifiers (
    serverModifiers: Array<ProductForServerModifiersInner>,
): number {

    let price = 0

    serverModifiers.forEach(modifier => {
        modifier.childModifiers.forEach(childModifier => price += childModifier.price)
    })

    return price
}

export function checkModifiers (
    serverModifiers: Array<ProductForServerModifiersInner>,
): true | string {

    for (let modifier of serverModifiers) {
        const childLength = modifier.childModifiers.length

        if (childLength < modifier.minAmount)
            return `В "${modifier.name}" выбрано ${childLength} дополнительные позиции, а необходимо ${modifier.minAmount}`
        if (childLength > modifier.maxAmount)
            return `В "${modifier.name}" выбрано ${childLength} дополнительные позиции, а доступно ${modifier.minAmount}`
    }

    return true
}

//is equal
export function compareModifiers (
    firstModifiers:Array<ProductForServerModifiersInner>,
    secondModifiers:Array<ProductForServerModifiersInner>
): boolean {

    sortModifier(firstModifiers)
    sortModifier(secondModifiers)

    if (firstModifiers.length !== secondModifiers.length) return false

    for (let i = 0; i < firstModifiers.length; i++) {

        if (firstModifiers[i].id !== secondModifiers[i].id) return false

        const firstModifiersChild = firstModifiers[i].childModifiers
        const secondModifiersChild = secondModifiers[i].childModifiers

        if (firstModifiersChild.length !== secondModifiersChild.length) return false

        for (let a = 0; a < firstModifiersChild.length; a++)
            if (firstModifiersChild[a].id !== secondModifiersChild[a].id) return false
    }

    return true
}

function sortModifier (modifiers:Array<ProductForServerModifiersInner>,) {
    modifiers.forEach(modifier => modifier.childModifiers.sort(
        (a, b) => sortWithParam(a, b, v => v.id)
    ))
    modifiers.sort(
        (a,b) => sortWithParam(a, b, v => v.id)
    )
}

function createServerChildModifier (
    childModifier: ModifierChildModifiersInner
) : ProductForServerModifiersInnerChildModifiersInner {
    return {
        id: childModifier.id,
        name: childModifier.name,
        price: childModifier.price
    }
}