import {
    useCityContext,
    useCityModalWindowContext,
    useDeliveryAddressContext,
    useDeliveryAddressModalWindowContext, useInformModalWindowContext
} from "../../../processes/Context";
import React from "react";
import DeliveryAddressModalWindow from "../../DeliveryAddressModalWindow";
import CitiesModalWindow from "../../CitiesModalWindow";
import {useAddressInitApp} from "../model/hooks";

const AppAddressComponent = () => {

    const [{}, dispatchCity] = useCityContext()
    const [{address}, dispatchDeliveryAddress] = useDeliveryAddressContext()
    const [payloadCityModalWindow, dispatchCityModalWindow] = useCityModalWindowContext()
    const [payloadDeliveryAddressModalWindow, dispatchDeliveryAddressModalWindow] = useDeliveryAddressModalWindowContext()
    const [{}, dispatchInformModalWindow] = useInformModalWindowContext()

    useAddressInitApp({
        dispatchCity: dispatchCity,
        dispatchDeliveryAddress: dispatchDeliveryAddress,
        dispatchCityModalWindow: dispatchCityModalWindow,
        dispatchDeliveryAddressModalWindow: dispatchDeliveryAddressModalWindow,
    })

    return (
        <>
            <CitiesModalWindow
                isShow={payloadCityModalWindow.isShow}
                cityDispatch={dispatchCity}
                dispatchCityModalWindow={dispatchCityModalWindow}
                dispatchDeliveryAddressModalWindow={dispatchDeliveryAddressModalWindow}
                dispatchInformModalWindow={dispatchInformModalWindow}
                dispatchDeliveryAddress={dispatchDeliveryAddress}
            />
            <DeliveryAddressModalWindow
                isShow={payloadDeliveryAddressModalWindow.isShow}
                dispatchInformModalWindow={dispatchInformModalWindow}
                address={address}
                dispatchAddress={dispatchDeliveryAddress}
                dispatchDeliveryAddressModalWindow={dispatchDeliveryAddressModalWindow}
            />
        </>
    )
}

export default AppAddressComponent