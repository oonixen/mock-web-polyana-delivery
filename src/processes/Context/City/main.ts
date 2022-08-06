import React, {createContext} from "react";
import {returnContext} from "../model/functions";
import {useReturnContextProvider} from "../model/hooks";
import {IAction, IPayload, ISetCity, ITypes} from "./interfaces";

const CityContext: React.Context<any> = createContext(undefined)
const types: ITypes = {
    set: "set"
}
const initState: IPayload = {
    city: null
}
const reducer = (state: IPayload, action: IAction) => {
    switch (action.type) {
        case types.set:
            return {...state, city: action.payload.city}
        default:
            return state
    }
}

export const useCityContext: () => [IPayload, React.Dispatch<any>] =
    returnContext(CityContext)
export const CityContextProvider = (props: any): React.ReactElement =>
    useReturnContextProvider(reducer, initState, CityContext.Provider, props)
export const setCity:ISetCity = ({dispatch, city}) =>
    dispatch({type: types.set, payload: {city: city}})