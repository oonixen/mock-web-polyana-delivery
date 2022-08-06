import React from "react";

export interface IPayload {
    isMapLaunched: boolean
}

export interface ITypes {
    set: string
}

export interface IAction {
    type: string,
    payload: IPayload
}

export interface ISetIsMapLaunched {
    ({}:IParams) : void
}

interface IParams extends IPayload {
    dispatch: React.Dispatch<any>
}