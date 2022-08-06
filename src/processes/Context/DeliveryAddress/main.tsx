import React, {createContext} from "react";
import {returnContext} from "../model/functions";
import {useReturnContextProvider} from "../model/hooks";
import {IAction, IPayload, ISetDeliveryAddress, ITypes} from "./interfaces";

const DeliveryAddressContext: React.Context<any> = createContext(undefined)
const types: ITypes = {
    set: "set"
}
const initState: IPayload = {
    address: null
}
const reducer = (state: IPayload, action: IAction) => {
    switch (action.type) {
        case types.set:
            return {...state, address: action.payload.address}
        default:
            return state
    }
}

export const useDeliveryAddressContext: () => [IPayload, React.Dispatch<any>] =
    returnContext(DeliveryAddressContext)
export const DeliveryAddressContextProvider = (props: any): React.ReactElement =>
    useReturnContextProvider(reducer, initState, DeliveryAddressContext.Provider, props)
export const setDeliveryAddress: ISetDeliveryAddress = ({dispatch, address}) =>
    dispatch({type: types.set, payload: {address: address}})