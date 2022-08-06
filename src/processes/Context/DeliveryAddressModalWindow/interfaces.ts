import React from "react";

export interface IPayload {
    isShow: boolean
}

export interface ITypes {
    set: string
}

export interface IAction {
    type: string,
    payload: IPayload
}

export interface ISetDeliveryAddressModalWindow {
    ({}:IParams) : void
}

interface IParams extends IPayload {
    dispatch: React.Dispatch<any>
}