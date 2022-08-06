import {ProductForServerModifiersInner} from "../../../../api";

export function getModifiersName (modifiers: ProductForServerModifiersInner[]) {
    const modifiersNames:Array<string> = []

    modifiers.forEach(modifier => {
        modifier.childModifiers.forEach(childModifier => {
            modifiersNames.push(childModifier.name)
        })
    })

    return modifiersNames
}