import {LOCAL_STORAGE_PARAM_NAME_USER_CITY} from "./constants";
import {Address} from "../../../api";
import React from "react";
import {setCity} from "../../processes/Context";

export function getUserCity() : Address | null {

    const city = window.localStorage.getItem(LOCAL_STORAGE_PARAM_NAME_USER_CITY)

    if (!city) return null

    return JSON.parse(city)
}

export function isSetUserCity () : boolean {
    return !!getUserCity()
}

export function setUserCity(city: Address, dispatch: React.Dispatch<any>) : void {
    const cityJSON = JSON.stringify(city)

    setCity({
        dispatch: dispatch,
        city: city
    })
    window.localStorage.setItem(LOCAL_STORAGE_PARAM_NAME_USER_CITY, cityJSON)
}