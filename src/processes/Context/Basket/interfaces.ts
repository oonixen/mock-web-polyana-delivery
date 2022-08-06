import {ProductForServer} from "../../../../api";
import React from "react";

export interface IPayload {
    sum: number,
    dishes: Array<ProductForServer>
}

export interface ITypes {
    change: string,
    clear: string
}

export interface IAction {
    type: string,
    payload: IPayload,
}

export interface IChangeBasket {
    ({}:IChangeBasketParams): void
}

export interface IClearBasket {
    ({}: IParams): void
}

interface IChangeBasketParams extends IPayload, IParams {}

interface IParams {
    dispatch: React.Dispatch<any>,
}