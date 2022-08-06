import React, {createContext} from "react";
import {IAction, IPayload, ITypes, ISetCityModalWindow} from "./interfaces";
import {returnContext} from "../model/functions";
import {useReturnContextProvider} from "../model/hooks";

const CityModalWindowContext: React.Context<any> = createContext(undefined)
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

export const useCityModalWindowContext: () => [IPayload, React.Dispatch<any>] =
    returnContext(CityModalWindowContext)
export const CityModalWindowContextProvider = (props: any): React.ReactElement =>
    useReturnContextProvider(reducer, initState, CityModalWindowContext.Provider, props)
export const setCityModalWindow: ISetCityModalWindow = ({dispatch, isShow}) =>
    dispatch({type: types.set, payload: {isShow: isShow}})
