import {iHttpRequest} from "../../../processes/Services/HttpRequest/classes";
import {OrderApi, PostOrderActiveStatus200Response} from "../../../../api";
import {Dispatch} from "react";
import {deleteOrderId} from "../../../entities/Order/functions";

export function getOrderStatus (
    orderId:string,
    setOrderInfo: Dispatch<PostOrderActiveStatus200Response>
) {
    iHttpRequest.requestApi<PostOrderActiveStatus200Response, OrderApi>({
        ApiClass: OrderApi,
        request: ApiClass => ApiClass.postOrderActiveStatus({orderId}),
        successCallback: response => {
            if (response.status === 204) return deleteOrderId()
            setOrderInfo(response.data)
        },
        errorCallback: error => {}
    })
}