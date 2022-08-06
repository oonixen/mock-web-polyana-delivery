import {ProductDetail, ProductForServerModifiersInner} from "../../../api";
import {IPayload} from "../../processes/Context/Basket/interfaces";
import React from "react";

export interface IAddDishToBasket {
    ({}:IAddDishToBasketProps): void
}

interface IAddDishToBasketProps extends IDishActionParams {}

export interface IDishActionParams {
    dish: ProductDetail,
    basket: IPayload,
    dispatchBasket: React.Dispatch<IPayload>,
    dispatchInformModalWindow: React.Dispatch<any>,
    serverModifiers?: Array<ProductForServerModifiersInner>
}