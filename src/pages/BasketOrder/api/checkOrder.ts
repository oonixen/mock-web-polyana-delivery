import {iHttpRequest} from "../../../processes/Services/HttpRequest/classes";
import {OrderApi, PostOrderCheck200Response, PostOrderCheck205Response, PostOrderCheckRequest} from "../../../../api";
import {Dispatch} from "react";
import {showInformModalWindow} from "../../../processes/Context";

export function checkOrder (
    request: PostOrderCheckRequest,
    setCheckResponse: Dispatch<PostOrderCheck200Response>,
    dispatchInformModalWindow: Dispatch<any>
) {
    iHttpRequest.requestApi<PostOrderCheck200Response|PostOrderCheck205Response, OrderApi>({
        ApiClass: OrderApi,
        request: ApiClass => ApiClass.postOrderCheck(request),
        successCallback: response => {

            if (response.status === 205) {
                const data = response.data as PostOrderCheck205Response
                return showInformModalWindow(dispatchInformModalWindow, data.error)
            }

            const data = response.data as PostOrderCheck200Response
            setCheckResponse(data)
        },
        errorCallback: error => {}
    })
}