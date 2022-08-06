import {getOrderId} from "../../../entities/Order/functions";
import {Dispatch} from "react";
import {PostOrderActiveStatus200Response} from "../../../../api";
import {getOrderStatus} from "../api/getOrderStatus";

export function updateOrderInfo (
    setOrderInfo: Dispatch<PostOrderActiveStatus200Response>
) {
    const orderId = getOrderId()
    if (orderId === null) return

    getOrderStatus(orderId, setOrderInfo)
}