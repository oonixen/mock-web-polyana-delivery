import {
    Address,
    PaymentMethod,
    PickupPoint,
    PostOrderCheckRequest,
    PostOrderMakeOrder200Response, PostOrderMakeOrder201Response,
    PostOrderMakeOrderRequest
} from "../../../../api";
import {Dispatch} from "react";
import {clearBasket, setOrder, showInformModalWindow} from "../../../processes/Context";
import {IPayload} from "../../../processes/Context/Order/interfaces";
import {IPayload as IBasketPayload} from "../../../processes/Context/Basket/interfaces";
import {deliveryTypes} from "../../../entities/Order";
import {isValidPhone} from "../../../features/Phone";
import {setOrderId} from "../../../entities/Order/functions";
import {getUserData} from "../../../features/UserProfile";
import {basketOrderSuccessRoute} from "../../../app";
import {AxiosResponse} from "axios";
import {NextRouter} from "next/router";

export function setPickupPoint (
    chosenId: string,
    pickupPoints: Array<PickupPoint>,
    dispatchOrder: Dispatch<any>,
) {

    let pickupPoint = null

    for (const value of pickupPoints)
        if (value.id === chosenId) {
            pickupPoint = value
            break
        }

    // @ts-ignore
    setOrder({dispatch: dispatchOrder, pickupPoint})
}

export function setPaymentMethod (
    chosenId: string,
    paymentMethods: Array<PaymentMethod>,
    dispatchOrder: Dispatch<any>,
) {

    let paymentMethod = null

    for (const value of paymentMethods)
        if (value.id === chosenId) {
            paymentMethod = value
            break
        }

    // @ts-ignore
    setOrder({dispatch: dispatchOrder, paymentMethod})
}

export function getCheckOrderRequestBody (
    order: IPayload,
    basket: IBasketPayload,
) : PostOrderCheckRequest|null {

    const requestBody: PostOrderCheckRequest = {
        conceptionId: order.conceptionId,
        products: basket.dishes,
        phone: order.phone,
        bonus: order.bonuses,
        promoCode: order.promocode
    }

    if (!basket.sum) return null

    if (!isValidPhone(order.phone)) return null

    const isFilledDeliveryTypeBoolean = isFilledDeliveryType(
        order,
        () => requestBody.address = order.address as Address,
        () => requestBody.pickupPoint = order.pickupPoint as PickupPoint
    )
    if (!isFilledDeliveryTypeBoolean) return null

    return requestBody
}

export function getMakeOrderRequestBody (
    order: IPayload,
    basket: IBasketPayload,
    dispatchInformModalWindow: Dispatch<any>
):PostOrderMakeOrderRequest|null {

    // @ts-ignore
    const requestBody: PostOrderMakeOrderRequest = {
        conceptionId: order.conceptionId,
        products: basket.dishes,
        people: order.people,
        promoCode: order.promocode,
        comment: order.comment,
        callBack: order.callback,
        bonus: order.bonuses
    }

    if (isValidPhone(order.phone)) requestBody.phone = order.phone
    else {
        showInformModalWindow(dispatchInformModalWindow, "Телефон неверно заполнен")
        return null
    }

    const isFilledDeliveryTypeBoolean = isFilledDeliveryType(
        order,
        () => {
            requestBody.address = order.address as Address
            requestBody.entrance = order.entrance
            requestBody.flat = order.flat
            requestBody.floor = order.floor
        },
        () => requestBody.pickupPoint = order.pickupPoint as PickupPoint
    )
    if (!isFilledDeliveryTypeBoolean) {
        showInformModalWindow(dispatchInformModalWindow, "Выберите адрес доставки")
        return null
    }

    if (order.paymentMethod) requestBody.paymentMethod = order.paymentMethod
    else {
        showInformModalWindow(dispatchInformModalWindow, "Выберите способ оплаты")
        return null
    }

    return requestBody
}

function isFilledDeliveryType (
    order: IPayload,
    deliveryAction: () => any,
    selfDeliveryAction: () => any,
): boolean {

    if (order.deliveryType === deliveryTypes.delivery && order.address)
        deliveryAction()
    else if (order.deliveryType === deliveryTypes.selfDelivery && order.pickupPoint)
        selfDeliveryAction()
    else return false

    return true
}

export function handleSuccessOrder(
    response: AxiosResponse<PostOrderMakeOrder200Response|PostOrderMakeOrder201Response>,
    dispatchInformModalWindow: Dispatch<any>,
    dispatchUser: Dispatch<any>,
    dispatchBasket: Dispatch<any>,
    router: NextRouter,
) {

    if (response.status === 200) {
        const data = response.data as PostOrderMakeOrder200Response
        return showInformModalWindow(dispatchInformModalWindow, data.error)
    }

    const data = response.data as PostOrderMakeOrder201Response

    setOrderId(data.orderId)

    if (data.payUrl) return window.location.replace(data.payUrl)

    getUserData(dispatchUser)
    clearBasket({dispatch: dispatchBasket})
    router.push(basketOrderSuccessRoute())
}