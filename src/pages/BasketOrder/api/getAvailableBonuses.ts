import {iHttpRequest} from "../../../processes/Services/HttpRequest/classes";
import {OrderApi, PostOrderAvailableBonus200Response} from "../../../../api";
import {IPayload as IOrderPayload} from "../../../processes/Context/Order/interfaces";
import {IPayload as IBasketPayload} from "../../../processes/Context/Basket/interfaces";
import {Dispatch} from "react";
import {setOrder} from "../../../processes/Context";

export function getAvailableBonuses (
    order: IOrderPayload,
    basket: IBasketPayload,
    setMaxBonuses: Dispatch<number>,
    dispatchOrder: Dispatch<any>
) {

    iHttpRequest.requestApi<PostOrderAvailableBonus200Response, OrderApi>({
        ApiClass: OrderApi,
        request: ApiClass => ApiClass.postOrderAvailableBonus({
            conceptionId: order.conceptionId,
            products: basket.dishes,
            promoCode: order.promocode,
            deliveryType: order.deliveryType
        }),
        successCallback: response => {

            const maxBonuses = response.data.bonus

            if (maxBonuses < order.bonuses)
                // @ts-ignore
                setOrder({dispatch: dispatchOrder, bonuses: maxBonuses})

            setMaxBonuses(maxBonuses)
        },
    })
}