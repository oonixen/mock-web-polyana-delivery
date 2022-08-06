import React, {createContext} from "react";
import {IAction, IPayload, ITypes} from "./interfaces";
import {returnContext} from "../model/functions";
import {useReturnContextProvider} from "../model/hooks";

const InformModalWindowContext: React.Context<any> = createContext(undefined)
const types: ITypes = {
    show: "show",
    hide: "hide"
}
const initState: IPayload = {
    isShow: false,
    text: ""
}
const reducer = (state: IPayload, action: IAction) => {
    switch (action.type) {
        case types.show:
            return {...state, isShow: true, text: action.payload.text}
        case types.hide:
            return {...state, isShow: false}
        default:
            return state
    }
}

export const useInformModalWindowContext: () => [IPayload, React.Dispatch<any>] =
    returnContext(InformModalWindowContext)
export const InformModalWindowContextProvider = (props: any): React.ReactElement =>
    useReturnContextProvider(reducer, initState, InformModalWindowContext.Provider, props)
export const showInformModalWindow = (dispatch: React.Dispatch<IAction>, text: string) =>
    // @ts-ignore
    dispatch({type: types.show, payload: {text: text}})
export const hideInformModalWindow = (dispatch: React.Dispatch<IAction>) =>
    // @ts-ignore
    dispatch({type: types.hide})
