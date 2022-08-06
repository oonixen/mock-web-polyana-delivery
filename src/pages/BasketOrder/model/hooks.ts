import {Dispatch, useEffect} from "react";
import {IPayload as IUserPayload} from "../../../processes/Context/User/interfaces";
import {IPayload as IOrderPayload} from "../../../processes/Context/Order/interfaces";
import {IPayload as IBasketPayload} from "../../../processes/Context/Basket/interfaces";
import {setOrder} from "../../../processes/Context";
import {getAvailableBonuses} from "../api/getAvailableBonuses";
import {getCheckOrderRequestBody} from "./functions";
import {checkOrder} from "../api/checkOrder";
import {PostOrderCheck200Response} from "../../../../api";

export function useSetPhoneForBasketOrder (
    user: IUserPayload,
    order: IOrderPayload,
    basket: IBasketPayload,
    dispatchOrder: Dispatch<any>
) {

    useEffect(() => {
        if (!user.user) return
        // @ts-ignore
        setOrder({dispatch: dispatchOrder, phone: user.user.phoneNumber})
    }, [user])
}

export function useSetMaxBonuses (
    user: IUserPayload,
    order: IOrderPayload,
    basket: IBasketPayload,
    setMaxBonuses: Dispatch<number>,
    dispatchOrder: Dispatch<any>
) {

    useEffect(() => {

        if (!user.user) return

        getAvailableBonuses(order, basket, setMaxBonuses, dispatchOrder)

    }, [user, order.deliveryType])
}

export function useCheckOrder (
    order: IOrderPayload,
    basket: IBasketPayload,
    setCheckResponse: Dispatch<PostOrderCheck200Response>,
    dispatchInformModalWindow: Dispatch<any>
) {

    useEffect(() => {
        const request = getCheckOrderRequestBody(order, basket)
        request && checkOrder(request, setCheckResponse, dispatchInformModalWindow)

    }, [order.deliveryType, order.phone, order.bonuses, order.pickupPoint, order.address])
}