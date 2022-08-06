import React, {createContext} from "react";
import {IAction, IPayload, ISetUser, ITypes} from "./interfaces";
import {returnContext} from "../model/functions";
import {useReturnContextProvider} from "../model/hooks";


const UserContext: React.Context<any> = createContext(undefined)
const types: ITypes = {
    setUser: "setUser"
}
const initState: IPayload = {
    user: null,
    isLoaded: null
}
const reducer = (state: IPayload, action: IAction) => {
    switch (action.type) {
        case types.setUser:
            return {...state, user: action.payload.user, isLoaded: action.payload.isLoaded}
        default:
            return state
    }
}

export const useUserContext: () => [IPayload, React.Dispatch<IPayload>] =
    returnContext(UserContext)
export const UserContextProvider = (props: any): React.ReactElement =>
    useReturnContextProvider(reducer, initState, UserContext.Provider, props)
export const setUser: ISetUser = ({dispatch, user, isLoaded}) =>
    dispatch({type: types.setUser, payload: {user: user, isLoaded: isLoaded}})