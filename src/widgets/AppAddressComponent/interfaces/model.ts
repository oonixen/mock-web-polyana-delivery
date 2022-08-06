import React from "react";

export interface IUseInitApp {
    ({}:IParams):void
}

interface IParams {
    dispatchCity: React.Dispatch<any>,
    dispatchDeliveryAddress: React.Dispatch<any>
    dispatchCityModalWindow: React.Dispatch<any>,
    dispatchDeliveryAddressModalWindow: React.Dispatch<any>,
}