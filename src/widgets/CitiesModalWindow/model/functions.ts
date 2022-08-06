import {Address} from "../../../../api";
import React from "react";
import {setUserCity} from "../../../features/UserCity";
import {setCityModalWindow, setDeliveryAddressModalWindow} from "../../../processes/Context";
import {deleteAddress} from "../../../features/DeliveryAddress";

export function onClickCityButton (
    city: Address,
    cityDispatch: React.Dispatch<any>,
    dispatchCityModalWindow: React.Dispatch<any>,
    dispatchDeliveryAddressModalWindow: React.Dispatch<any>,
    dispatchDeliveryAddress: React.Dispatch<any>,
)
{


    setUserCity(city, cityDispatch)
    setCityModalWindow({dispatch: dispatchCityModalWindow, isShow: false})

    deleteAddress(dispatchDeliveryAddress)
    setDeliveryAddressModalWindow({dispatch: dispatchDeliveryAddressModalWindow, isShow:true})
}