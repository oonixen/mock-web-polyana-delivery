import {IJsxChildren} from "../../../app";
import {IPayload} from "../../../processes/Context/Order/interfaces";
import {IPayload as IUserPayload} from "../../../processes/Context/User/interfaces"
import {Dispatch} from "react";
import {SerializedStyles} from "@emotion/react";
import {PostOrderCheck200Response} from "../../../../api";

export interface IInputLayout extends IJsxChildren {
    label: string,
    containerStyles?: SerializedStyles
}

export interface IDeliveryInfo {
    order: IPayload,
    dispatchOrder: Dispatch<any>
}

export interface IDeliveryForm {
    order: IPayload,
    dispatchOrder: Dispatch<any>
}

export interface ISelfDeliveryForm {
    order: IPayload,
    dispatchOrder: Dispatch<any>
}

export interface IBonusSlider {
    order: IPayload,
    dispatchOrder: Dispatch<any>,
    user: IUserPayload,
    maxBonuses: number
}

export interface IH1Title {
    order: IPayload,
    checkedResponse: PostOrderCheck200Response|null
}

export interface IPaymentSelector {
    order: IPayload,
    dispatchOrder: Dispatch<any>
}

export interface ISubmitButton {
    checkedResponse: PostOrderCheck200Response|null
}

export interface IPromotionsSection {
    checkedResponse: PostOrderCheck200Response|null
}

export interface IDeliveryTypeSwitcher {
    order: IPayload,
    dispatchOrder: Dispatch<any>
}