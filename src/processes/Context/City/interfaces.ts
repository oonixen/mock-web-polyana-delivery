import {Address} from "../../../../api/";
import React from "react";

export interface IPayload {
    city: Address | null
}

export interface ITypes {
    set: string
}

export interface IAction {
    type: string,
    payload: IPayload
}

export interface ISetCity {
    ({}:IParams) : void
}

interface IParams extends IPayload {
    dispatch: React.Dispatch<any>
}