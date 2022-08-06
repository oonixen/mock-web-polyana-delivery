import {iHttpRequest} from "../../../processes/Services/HttpRequest/classes";
import {PostUserOrders200ResponseInner, PostUserOrdersRequest, UserApi} from "../../../../api";
import React from "react";
import {showInformModalWindow} from "../../../processes/Context";

export function getUsersOrders (
    lastOrderId: string|null,
    setOrders: React.Dispatch<any>,
    dispatchInformModalWindow: React.Dispatch<any>
) {

    iHttpRequest.requestApi<PostUserOrders200ResponseInner[], UserApi>({
        ApiClass: UserApi,
        request: ApiClass => {
            const body: PostUserOrdersRequest = {}

            if (lastOrderId) body.lastOrderId = lastOrderId
            return ApiClass.postUserOrders(body)
        },
        successCallback: response => {
            setOrders(response.data)
        },
        errorCallback: error => {
            showInformModalWindow(dispatchInformModalWindow, "Не удалось загрузить историю заказов")
        }
    })
}