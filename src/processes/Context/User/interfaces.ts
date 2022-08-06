import {User} from "../../../../api";
import React from "react";

export interface IPayload {
    user: User|null,
    isLoaded: boolean|null
}

export interface ITypes {
    setUser: string
}

export interface IAction {
    type: string,
    payload: IPayload
}

export interface ISetUser {
    ({}:IParams):void
}

interface IParams extends IPayload {
    dispatch: React.Dispatch<any>
}