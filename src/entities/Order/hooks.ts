import {IPayload} from "../../processes/Context/Basket/interfaces";
import {ConceptionChoose200Response} from "../../../api";
import {useEffect} from "react";
import {setOrder, useOrderContext} from "../../processes/Context";

export function useSetConceptionOrderInfo (
    basket: IPayload,
    data: ConceptionChoose200Response
) {

    const [order, dispatchOrder] = useOrderContext()

    useEffect(() => {

        if (basket.dishes.length !== 1) return

        const basketConceptionId = basket.dishes[0].conceptionId
        const currentConceptionId = data.id

        if (basketConceptionId !== currentConceptionId) return

        // @ts-ignore
        setOrder({
            dispatch: dispatchOrder,
            conceptionId: currentConceptionId,
            pickupPoints: data.pickupPoints,
            paymentMethods: data.paymentMethods,
            pickupPoint: null,
            paymentMethod: null
        })
    }, [basket])
}