import React, {createContext} from "react";
import {IAction, IChangeBasket, IClearBasket, IPayload, ITypes} from "./interfaces";
import {returnContext} from "../model/functions";
import {useReturnContextProvider} from "../model/hooks";

const BasketContext: React.Context<any> = createContext(undefined)
const types: ITypes = {
    change: "change",
    clear: "clear"
}
const initState: IPayload = {
    sum: 0,
    dishes: []
}
const reducer = (state: IPayload, action: IAction) => {
    switch (action.type) {
        case types.change:
            return {...state, sum: action.payload.sum, dishes: action.payload.dishes}
        case types.clear:
            return {...state, sum: 0, dishes: []}
        default:
            return state
    }
}

export const useBasketContext: () => [IPayload, React.Dispatch<any>] =
    returnContext(BasketContext)
export const BasketContextProvider = (props: any): React.ReactElement =>
    useReturnContextProvider(reducer, initState, BasketContext.Provider, props)
export const changeBasket:IChangeBasket = ({dispatch, dishes, sum}) =>
    dispatch({type:types.change, payload: {dishes, sum}})
export const clearBasket:IClearBasket = ({dispatch}) => {
    dispatch({type:types.clear})
}