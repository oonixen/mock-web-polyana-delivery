import {iHttpRequest} from "../../processes/Services/HttpRequest/classes";
import {UserApi, User} from "../../../api";
import React from "react";
import {setUser} from "../../processes/Context";

export function getUserData (
    dispatchUser: React.Dispatch<any>,
    onSuccessCallback?: () => void,
    onErrorCallback?: () => void
) {
    iHttpRequest.requestApi<User, UserApi>({
        ApiClass: UserApi,
        request: iClass => {
            return iClass.getCurrentUser()
        },
        successCallback: response => {
            setUser({dispatch: dispatchUser, user: response.data, isLoaded: true})
            if (onSuccessCallback) onSuccessCallback()
        },
        errorCallback: error => {
            setUser({dispatch: dispatchUser, user: null, isLoaded: false})
            if (onErrorCallback) onErrorCallback()
        }
    })
}