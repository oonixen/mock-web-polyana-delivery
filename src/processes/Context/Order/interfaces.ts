import React from "react";
import {Address, PaymentMethod, PickupPoint} from "../../../../api";
import {deliveryTypes} from "../../../entities/Order";

export interface IPayload {
    people: number,
    promocode: string,
    pickupPoints: PickupPoint[],
    paymentMethods: PaymentMethod[],
    deliveryType: deliveryTypes,
    callback: boolean,
    phone: string,
    comment: string,
    address: Address|null,
    entrance: string,
    flat: string,
    floor: string,
    pickupPoint: PickupPoint|null,
    paymentMethod: PaymentMethod|null,
    bonuses: number,
    conceptionId: string
}

export interface ITypes {
    set: string
}

export interface IAction {
    type: string,
    payload: IPayload
}

export interface ISetOrder {
    ({}:ISetOrderParams):void
}

interface ISetOrderParams extends IPayload {
    dispatch: React.Dispatch<any>
}