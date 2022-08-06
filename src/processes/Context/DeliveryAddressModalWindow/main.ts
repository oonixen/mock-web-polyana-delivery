import React, {createContext} from "react";
import {IAction, IPayload, ITypes, ISetDeliveryAddressModalWindow} from "./interfaces";
import {returnContext} from "../model/functions";
import {useReturnContextProvider} from "../model/hooks";

const DeliveryAddressModalWindowContext: React.Context<any> = createContext(undefined)
const types: ITypes = {
    set: "set"
}
const initState: IPayload = {
    isShow: false
}
const reducer = (state: IPayload, action: IAction) => {
    switch (action.type) {
        case types.set:
            return {...state, isShow: action.payload.isShow}
        default:
            return state
    }
}

export const useDeliveryAddressModalWindowContext: () => [IPayload, React.Dispatch<any>] =
    returnContext(DeliveryAddressModalWindowContext)
export const DeliveryAddressModalWindowContextProvider = (props: any): React.ReactElement =>
    useReturnContextProvider(reducer, initState, DeliveryAddressModalWindowContext.Provider, props)
export const setDeliveryAddressModalWindow: ISetDeliveryAddressModalWindow = ({dispatch, isShow}) =>
    dispatch({type: types.set, payload: {isShow: isShow}})
