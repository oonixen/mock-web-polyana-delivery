import React from "react";
import {getAddress} from "../../../features/DeliveryAddress";
import {getUserCity} from "../../../features/UserCity";
import {
    setCity,
    setCityModalWindow,
    setDeliveryAddress,
    setDeliveryAddressModalWindow
} from "../../../processes/Context";

export function initCityAndAddress (
    dispatchCity: React.Dispatch<any>,
    dispatchDeliveryAddress: React.Dispatch<any>,
    dispatchCityModalWindow: React.Dispatch<any>,
    dispatchDeliveryAddressModalWindow: React.Dispatch<any>,
) {

    const city = getUserCity()
    const address = getAddress()

    if (city) setCity({dispatch: dispatchCity, city: city})
    else setCityModalWindow({dispatch: dispatchCityModalWindow, isShow: true})

    if (address) setDeliveryAddress({dispatch: dispatchDeliveryAddress, address: address})
    else if (city) setDeliveryAddressModalWindow({dispatch: dispatchDeliveryAddressModalWindow, isShow: true})
}