import {useCityContext} from "../../../processes/Context";
import Input from "./Input";
import Map from "./Map";
import React, {useState} from "react";
import {Address} from "../../../../api/";
import {IInputAndMap} from "../interfaces/ui";

export const InputAndMap: React.FC<IInputAndMap> = ({
    dispatchInformModalWindow,
    address,
    dispatchAddress,
    dispatchDeliveryAddressModalWindow
}) => {

    const [{city}] = useCityContext()
    const [isLoading, setIsLoading] = useState(false)
    const [currentAddress, setCurrentAddress] = useState<Address|null>(address)

    return (
        <>
            <Input
                dispatchInformModalWindow={dispatchInformModalWindow}
                dispatchAddress={dispatchAddress}
                // @ts-ignore
                city={city}
                currentAddress={currentAddress}
                setCurrentAddress={setCurrentAddress}
                isLoading={isLoading}
                dispatchDeliveryAddressModalWindow={dispatchDeliveryAddressModalWindow}
            />
            <Map
                dispatchInformModalWindow={dispatchInformModalWindow}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                // @ts-ignore
                city={city}
                currentAddress={currentAddress}
                setCurrentAddress={setCurrentAddress}
            />
        </>
    )
}