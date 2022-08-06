import React, {Dispatch, SetStateAction, useEffect} from "react";
import {Address} from "../../../../api/";
import {getCity} from "../api/getCity";
import {showInformModalWindow} from "../../../processes/Context";
import {errors} from "../../../app";

export const useSetCities = (
    setCities: Dispatch<SetStateAction<Address[]|null>>,
    dispatchInformModalWindow: React.Dispatch<any>
) => {

    useEffect(() => {
        getCity({
            successCallback: (response) => setCities(response.data),
            errorCallback: () => showInformModalWindow(dispatchInformModalWindow, errors.DEFAULT_ERROR_TEXT)
        })
    }, [])
}