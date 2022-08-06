import {ProductDetail, ProductForServer, ProductForServerModifiersInner} from "../../../../api";
import {IPayload} from "../../../processes/Context/Basket/interfaces";
import React, {Dispatch} from "react";
import {changeBasket, showInformModalWindow} from "../../../processes/Context";
import {IAddDishToBasket} from "../interfaces";
import {compareModifiers, getPriceModifiers} from "./modifier";

export const addDishToBasket: IAddDishToBasket = ({
    dish,
    basket,
    dispatchBasket,
    dispatchInformModalWindow,
    serverModifiers
}) => {

    //check current conception
    if (dish.conceptionId !== getBasketConception(basket, dish.conceptionId))
        return showInformModalWindow(dispatchInformModalWindow, "В вашей корзине уже блюда из другого ресторана")

    const index = isBasketHasDish(dish.id, serverModifiers, basket)

    //add dish
    if (index !== null) increaseDish(basket.dishes[index], basket)
    //create dish
    else {
        const addedDish: ProductForServer = createProductForServer(dish, serverModifiers)
        basket.sum += addedDish.price
        basket.dishes.push(addedDish)
    }

    changeBasket({dispatch: dispatchBasket, dishes: basket.dishes, sum: basket.sum})
}

export function increaseDishInBasket (
    dish: ProductForServer,
    basket: IPayload,
    dispatchBasket: Dispatch<IPayload>
) {
    const index = isBasketHasDish(dish.id, dish.modifiers, basket)

    if (index === null) return

    increaseDish(basket.dishes[index], basket)

    changeBasket({dispatch: dispatchBasket, dishes: basket.dishes, sum: basket.sum})
}

export function decreaseDishInBasket (
    dish: ProductForServer,
    basket: IPayload,
    dispatchBasket: React.Dispatch<IPayload>,
) {

    const indexDish = isBasketHasDish(dish.id, dish.modifiers, basket)

    if (indexDish === null) return

    basket.sum -= dish.price

    if (dish.amount === 1) deleteDish(indexDish, basket)
    else dish.amount -= 1

    changeBasket({dispatch: dispatchBasket, dishes: basket.dishes, sum: basket.sum})
}

export function deleteDishInBasket (
    dish: ProductForServer,
    basket: IPayload,
    dispatchBasket: React.Dispatch<IPayload>,
) {

    const indexDish = isBasketHasDish(dish.id, dish.modifiers, basket)

    if (indexDish === null) return

    basket.sum -= dish.price * dish.amount
    deleteDish(indexDish, basket)

    changeBasket({dispatch: dispatchBasket, dishes: basket.dishes, sum: basket.sum})
}

function deleteDish (
    indexDish: number,
    basket: IPayload,
) {
    basket.dishes.splice(indexDish, 1)
}

function isBasketHasDish(
    dishId:string,
    modifiers: Array<ProductForServerModifiersInner>|undefined,
    basket: IPayload
): number|null {
    const dishes = basket.dishes

    for (let i = 0; i < dishes.length; i++) {
        const basketDish = dishes[i]

        if (basketDish.id === dishId) {
            const secondModifiers = basketDish.modifiers
            if (modifiers && secondModifiers && compareModifiers(modifiers, secondModifiers)) return i
            if (!modifiers && !secondModifiers) return i
        }
    }

    return null
}

function getBasketConception (basket: IPayload, defaultId: string): string {
    const firstElem = basket.dishes[0]
    if (firstElem) return firstElem.conceptionId
    return defaultId
}

function increaseDish (dish: ProductForServer, basket: IPayload) {
    dish.amount += 1
    basket.sum += dish.price
}

function createProductForServer (
    dish: ProductDetail,
    serverModifiers: Array<ProductForServerModifiersInner>|undefined
): ProductForServer
{

    let modifiers = undefined
    let price = dish.price

    if (serverModifiers) {
        modifiers = serverModifiers
        price += getPriceModifiers(serverModifiers)
    }

    return {
        id: dish.id,
        name: dish.name,
        conceptionId: dish.conceptionId,
        amount: 1,
        price: price,
        image: dish.image,
        modifiers: modifiers
    }
}