import React, {Dispatch} from "react";
import {Address} from "../../../../api";

export interface IDeliveryAddressModalWindow extends IParamsCommon{
    isShow: boolean
}

export interface IInputAndMap extends IParamsCommon {

}

interface IParamsCommon {
    dispatchInformModalWindow: Dispatch<any>,
    address: Address|null,
    dispatchAddress: Dispatch<any>,
    dispatchDeliveryAddressModalWindow: Dispatch<any>
}

export interface IMapPage extends IParams{
    setIsLoading: React.Dispatch<boolean>,
}

export interface IInput extends IParams{
    dispatchAddress: React.Dispatch<any>,
    dispatchDeliveryAddressModalWindow: Dispatch<any>
}

interface IParams {
    dispatchInformModalWindow: React.Dispatch<any>,
    city: Address,
    setCurrentAddress: React.Dispatch<Address|null>,
    isLoading: boolean,
    currentAddress: Address|null,
}