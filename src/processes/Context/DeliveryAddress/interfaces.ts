import {Address} from "../../../../api/";
import React from "react";

export interface IPayload {
    address: Address | null
}

export interface ITypes {
    set: string
}

export interface IAction {
    type: string,
    payload : IPayload
}

export interface ISetDeliveryAddress {
    ({}: ISetDeliveryAddressParams ): void
}

interface ISetDeliveryAddressParams extends IPayload{
    dispatch: React.Dispatch<any>
}