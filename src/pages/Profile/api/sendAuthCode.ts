import {iHttpRequest} from "../../../processes/Services/HttpRequest/classes";
import {AuthApi, AuthSendCode200Response} from "../../../../api";
import React from "react";
import {showInformModalWindow} from "../../../processes/Context";

export function sendAuthCode (
    phone:string,
    setIsLoading: React.Dispatch<boolean>,
    dispatchInformModalWindow: React.Dispatch<any>,
    setIsShowVerifyCodeModalWindow: React.Dispatch<boolean>
) {
    iHttpRequest.requestApi<AuthSendCode200Response, AuthApi>({
        ApiClass: AuthApi,
        request: (iClass) => {
            return iClass.authSendCode({phoneNumber: phone})
        },
        successCallback: (response) => {
            setIsLoading(false)
            setIsShowVerifyCodeModalWindow(true)
        },
        errorCallback: (error) => {
            showInformModalWindow(dispatchInformModalWindow, "Что-то пошло не так")
            setIsLoading(false)
        }
    })
}