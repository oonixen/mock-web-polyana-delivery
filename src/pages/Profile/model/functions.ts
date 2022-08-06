import React from "react";
import {clearPhoneMask, isValidPhone} from "../../../features/Phone";
import {showInformModalWindow} from "../../../processes/Context";
import {sendAuthCode} from "../api/sendAuthCode";

export function authorizeUser (
    phone:string,
    setIsLoading: React.Dispatch<boolean>,
    dispatchInformModalWindow: React.Dispatch<any>,
    setIsShowVerifyCodeModalWindow: React.Dispatch<boolean>
) {

    if (!isValidPhone(phone))
        return showInformModalWindow(dispatchInformModalWindow, "Введён некорректный телефон")

    setIsLoading(true)

    sendAuthCode(phone, setIsLoading, dispatchInformModalWindow, setIsShowVerifyCodeModalWindow)
}