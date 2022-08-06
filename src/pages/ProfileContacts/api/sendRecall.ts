import {iHttpRequest} from "../../../processes/Services/HttpRequest/classes";
import {UserApi} from "../../../../api";
import {Dispatch} from "react";
import {showInformModalWindow} from "../../../processes/Context";

export function  sendRecall (message: string, setIsLoading: Dispatch<any>, dispatchInformModalWindow: Dispatch<any>) {
    iHttpRequest.requestApi<void, UserApi>({
        ApiClass: UserApi,
        request: ApiClass => {
            setIsLoading(true)
            return ApiClass.postUserRecall({text: message})
        },
        successCallback: response => {
            showInformModalWindow(dispatchInformModalWindow, "Спасибо за отзыв")
            setIsLoading(false)
        },
        errorCallback: error => {
            showInformModalWindow(dispatchInformModalWindow, "Возникла ошибка, не удалось отправить отзыв")
            setIsLoading(false)
        }
    })
}