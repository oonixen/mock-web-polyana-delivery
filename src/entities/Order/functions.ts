import {LOCAL_STORAGE_ORDER_ID_ADD_EVENT_NAME, LOCAL_STORAGE_ORDER_ID_NAME} from "./constants";

export function getOrderId () {
    return localStorage.getItem(LOCAL_STORAGE_ORDER_ID_NAME)
}

export function setOrderId (orderId: string) {
    localStorage.setItem(LOCAL_STORAGE_ORDER_ID_NAME, orderId)

    const event = new Event(LOCAL_STORAGE_ORDER_ID_ADD_EVENT_NAME)
    window.dispatchEvent(event)
}

export function deleteOrderId () {
    localStorage.removeItem(LOCAL_STORAGE_ORDER_ID_NAME)
}