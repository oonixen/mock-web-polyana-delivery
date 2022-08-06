import {Dispatch, useEffect} from "react";
import {PostOrderActiveStatus200Response} from "../../../../api";
import {updateOrderInfo} from "./functions";
import {LOCAL_STORAGE_ORDER_ID_ADD_EVENT_NAME} from "../../../entities/Order";

export function useUpdateOrderInfo (
    setOrderInfo: Dispatch<PostOrderActiveStatus200Response>
) {
    useEffect(() => {

        const func = () => updateOrderInfo(setOrderInfo)
        //get orderInfo every 5 min
        const timerId = setInterval(func, 3e5)

        //get orderInfo first timer
        func()
        //get orderInfo after storage update
        window.addEventListener(LOCAL_STORAGE_ORDER_ID_ADD_EVENT_NAME, func)

        return () => {
            clearInterval(timerId)
            window.removeEventListener(LOCAL_STORAGE_ORDER_ID_ADD_EVENT_NAME, func)
        }
    }, [])
}