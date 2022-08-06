import {useEffect} from "react";
import {IUseInitApp} from "../interfaces/model";
import {initCityAndAddress} from "./functions";

export const useAddressInitApp: IUseInitApp = ({
    dispatchDeliveryAddress,
    dispatchCity,
    dispatchCityModalWindow,
    dispatchDeliveryAddressModalWindow
}) => {
    useEffect(() => {

        initCityAndAddress(
            dispatchCity,
            dispatchDeliveryAddress,
            dispatchCityModalWindow,
            dispatchDeliveryAddressModalWindow
        )
    }, [])
}