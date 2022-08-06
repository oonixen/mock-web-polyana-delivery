import {iHttpRequest} from "../../../processes/Services/HttpRequest/classes";
import {
    OrderApi,
    PostOrderMakeOrder200Response,
    PostOrderMakeOrder201Response,
    PostOrderMakeOrderRequest
} from "../../../../api";
import {Dispatch} from "react";
import {showInformModalWindow} from "../../../processes/Context";
import {NextRouter} from "next/router";
import {errors} from "../../../app";
import {handleSuccessOrder} from "../model/functions";

export function makeOrder (
    body: PostOrderMakeOrderRequest,
    dispatchInformModalWindow: Dispatch<any>,
    dispatchUser: Dispatch<any>,
    dispatchBasket: Dispatch<any>,
    router: NextRouter,
) {
    iHttpRequest.requestApi<PostOrderMakeOrder200Response|PostOrderMakeOrder201Response, OrderApi>({
        ApiClass: OrderApi,
        request: ApiClass => ApiClass.postOrderMakeOrder(body),
        successCallback: response => {
            handleSuccessOrder(
                response,
                dispatchInformModalWindow,
                dispatchUser,
                dispatchBasket,
                router
            )
        },
        errorCallback: error =>
            showInformModalWindow(dispatchInformModalWindow, errors.DEFAULT_ERROR_TEXT)
    })
}