import {LOCALSTORAGE_PARAM_NAME_USER_ADDRESS} from './constants'
import {Address} from "../../../../api";
import React from "react";
import {setDeliveryAddress} from "../../../processes/Context";

export function getAddress () : Address | null {

    const address = localStorage.getItem(LOCALSTORAGE_PARAM_NAME_USER_ADDRESS)

    if (!address) return null

    return JSON.parse(address)
}

export function isFilledAddress () : boolean {
    return !!getAddress()
}

export function setAddress (addressObj: Address, dispatch: React.Dispatch<any>) : void {
    const addressJSON = JSON.stringify(addressObj)

    setDeliveryAddress({dispatch: dispatch, address: addressObj})
    localStorage.setItem(LOCALSTORAGE_PARAM_NAME_USER_ADDRESS, addressJSON)
}

export function deleteAddress (dispatch: React.Dispatch<any>): void {
    localStorage.removeItem(LOCALSTORAGE_PARAM_NAME_USER_ADDRESS)
    setDeliveryAddress({dispatch: dispatch, address: null})
}