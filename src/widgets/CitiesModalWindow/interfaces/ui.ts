import React, {Dispatch} from "react";

export interface ICityList extends IParam {
}

export interface ICitiesModalWindow extends IParam {
    isShow: boolean,
}

interface IParam {
    cityDispatch: React.Dispatch<any>,
    dispatchCityModalWindow: Dispatch<any>,
    dispatchDeliveryAddressModalWindow: Dispatch<any>,
    dispatchDeliveryAddress: Dispatch<any>,
    dispatchInformModalWindow: Dispatch<any>,
}