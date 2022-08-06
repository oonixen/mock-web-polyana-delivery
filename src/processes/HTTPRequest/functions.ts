import {IHandleRequest} from "./interfaces";
import {webRequest} from "../../app";
import {getAuthorizationInstance} from "../Axios";
import {AccessToken, Tokens} from "../Auth";

export const handleRequest: IHandleRequest = (params) => {

    const {
        ApiClass,
        request,
        updateAuthRequest,
        successCallback,
        errorCallback,
        attempt = 0
    } = params

    const iApiClass = new ApiClass(
        undefined,
        webRequest.API_HOST,
        getAuthorizationInstance(new AccessToken().get())
    )

    request(iApiClass)
        .then(async (response) => {

            const statusCode = response.status

            if (statusCode >= 200 && statusCode < 300) {
                if (successCallback) successCallback(response);
            }
            else if (statusCode === 401 && attempt < 1) {
                const isSuccess = await new Tokens().updateAuth(updateAuthRequest)
                if (isSuccess) handleRequest({...params, attempt: 1})
                else if (errorCallback) errorCallback(new Error("Вы не авторизованы"))
            }
            else {
                if (errorCallback) errorCallback(new Error(`Unregistered status ${response.status}`))
            }
        })
        .catch(() => {
            if (errorCallback) errorCallback(new Error("Ошибка запроса"));
        })
}