import {iHttpRequest} from "../../../processes/Services/HttpRequest/classes";
import {AuthApi, AuthToken} from "../../../../api";
import React from "react";
import {setUser, showInformModalWindow} from "../../../processes/Context";
import {Tokens} from "../../../processes/Auth";
import {getUserData} from "../../../features/UserProfile";
import {NextRouter} from "next/router";
import {profileOrdersRoute} from "../../../app";

export function verifyCode(
    phoneNumber: string,
    code: string,
    setIsLoading: React.Dispatch<boolean>,
    dispatchInformModalWindow: React.Dispatch<any>,
    dispatchUser: React.Dispatch<any>,
    router: NextRouter
) {
    iHttpRequest.requestApi<AuthToken, AuthApi>({
        ApiClass: AuthApi,
        request: (iClass) => {
            setIsLoading(true)
            return iClass.authCodeVerify({
                phoneNumber: phoneNumber,
                code: code
            })
        },
        successCallback: (response) => {
            const iTokens = new Tokens()

            iTokens.setAuth(response.data.access, response.data.refresh)
            getUserData(
                dispatchUser,
                () => {
                    router.push(profileOrdersRoute())
                    setIsLoading(false)
                },
                () => {
                    showInformModalWindow(dispatchInformModalWindow, "Вход не выполнен, попробуйте через пару минут")
                    setIsLoading(false)
                })
        },
        errorCallback: (error) => {
            showInformModalWindow(dispatchInformModalWindow, "Введён неправильный код")
            setIsLoading(false)
        }
    })
}