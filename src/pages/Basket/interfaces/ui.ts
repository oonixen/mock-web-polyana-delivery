import {ProductForServer, ProductForServerModifiersInner} from "../../../../api";
import {Dispatch} from "react";
import {IPayload} from "../../../processes/Context/Basket/interfaces";

export interface IDishes {
    basket: IPayload
    dispatchBasket: Dispatch<any>
}

export interface ICounter {
    count: number,
    decrease: () => any,
    increase: () => any
}

export interface IRecommendations {
    dishes: ProductForServer[],
    basket: IPayload,
    dispatchBasket: Dispatch<any>,
    dispatchInformModalWindow: Dispatch<any>
}

export interface IModifiers {
    modifiers: ProductForServerModifiersInner[]
}