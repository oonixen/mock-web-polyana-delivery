import React, {createContext} from "react";
import {IAction, IPayload, ISetOrder, ITypes} from "./interfaces";
import {returnContext} from "../model/functions";
import {useReturnContextProvider} from "../model/hooks";
import {deliveryTypes} from "../../../entities/Order";

const OrderContext: React.Context<any> = createContext(undefined)
const types: ITypes = {
    set: "set"
}
const initState: IPayload = {
    promocode: "",
    people: 0,
    deliveryType: deliveryTypes.delivery,
    paymentMethods: [],
    pickupPoints: [],
    callback: true,
    phone: "",
    comment: "",
    address: null,
    entrance: "",
    flat: "",
    floor: "",
    pickupPoint: null,
    paymentMethod: null,
    bonuses: 0,
    conceptionId: ""
}
const reducer = (state: IPayload, action: IAction) => {
    switch (action.type) {
        case types.set:
            return {...state, ...action.payload}
        default:
            return state
    }
}

export const useOrderContext: () => [IPayload, React.Dispatch<any>] =
    returnContext(OrderContext)
export const OrderContextProvider = (props: any): React.ReactElement =>
    useReturnContextProvider(reducer, initState, OrderContext.Provider, props)
export const setOrder:ISetOrder = ({dispatch, ...props}) =>
    dispatch({type: types.set, payload: props})