import React, {createContext} from "react";
import {IAction, IPayload, ITypes, ISetIsMapLaunched} from "./interfaces";
import {returnContext} from "../model/functions";
import {useReturnContextProvider} from "../model/hooks";

const MapContext: React.Context<any> = createContext(undefined)
const types: ITypes = {
    set: "set"
}
const initState: IPayload = {
    isMapLaunched: false
}
const reducer = (state: IPayload, action: IAction) => {
    switch (action.type) {
        case types.set:
            return {...state, isMapLaunched: action.payload.isMapLaunched}
        default:
            return state
    }
}

export const useMapContext: () => [IPayload, React.Dispatch<any>] =
    returnContext(MapContext)
export const MapContextProvider = (props: any): React.ReactElement =>
    useReturnContextProvider(reducer, initState, MapContext.Provider, props)
export const setIsMapLaunched:ISetIsMapLaunched = ({dispatch, isMapLaunched}) =>
    dispatch({type: types.set, payload: {isMapLaunched: isMapLaunched}})