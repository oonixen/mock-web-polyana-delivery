import React, {useReducer, useMemo} from "react";
import {IInitContextState} from "./interfaces";

export function useReturnContextProvider (
    reducer: (state: any, action: any) => any,
    initState: IInitContextState,
    JsxProvider: React.Provider<any>,
    props: any
) {
    const [state, dispatch] = useReducer(reducer, initState)
    const returnState = () => [state, dispatch]
    const value = useMemo(returnState, [state])

    return <JsxProvider value={value} {...props}/>
}