import {iHttpRequest} from "../../../processes/Services/HttpRequest/classes";
import {UpdateUserRequest, User, UserApi} from "../../../../api";
import {Dispatch} from "react";
import {setUser, showInformModalWindow} from "../../../processes/Context";

export function patchUser (
    userData: UpdateUserRequest,
    dispatchUser: Dispatch<any>,
    setIsLoading: Dispatch<boolean>,
    dispatchInfoModalWindow: Dispatch<any>
) {

    iHttpRequest.requestApi<User, UserApi>({
        ApiClass: UserApi,
        request: ApiClass => {
            setIsLoading(true)
            return ApiClass.updateUser(userData)
        },
        successCallback: response => {
            setUser({dispatch: dispatchUser, user: response.data, isLoaded: true})
            setIsLoading(false)
        },
        errorCallback: error => {
            showInformModalWindow(dispatchInfoModalWindow, "Не удалось обновить данные")
            setIsLoading(false)
        }
    })
}