import {
    useBasketContext,
    useInformModalWindowContext,
    useOrderContext,
    useUserContext
} from "../../../processes/Context";
import {css} from "@emotion/react";
import {styles} from "../styles/content";
import DeliveryInfo from "./DeliveryInfo";
import PaymentSelector from "./PaymentSelector";
import BonusSlider from "./BonusSlider";
import PromotionsSection from "./PromotionsSection";
import {useCheckOrder, useSetMaxBonuses, useSetPhoneForBasketOrder} from "../model/hooks";
import {useEffect, useState} from "react";
import {PostOrderCheck200Response} from "../../../../api";
import H1Title from "./H1Title";
import SubmitButton from "./SubmitButton";
import {getMakeOrderRequestBody} from "../model/functions";
import {useRouter} from "next/router";
import {makeOrder} from "../api/makeOrder";
import {rootRoute} from "../../../app";

const Content = () => {

    const [basket, dispatchBasket] = useBasketContext()
    const [order, dispatchOrder] = useOrderContext()
    const [user, dispatchUser] = useUserContext()
    const [maxBonuses, setMaxBonuses] = useState(0)
    const [checkedResponse, setCheckResponse] = useState<PostOrderCheck200Response|null>(null)
    const [, dispatchInformModalWindow] = useInformModalWindowContext()
    const router = useRouter()

    useSetPhoneForBasketOrder(user, order, basket, dispatchOrder)
    useSetMaxBonuses(user, order, basket, setMaxBonuses, dispatchOrder)
    useCheckOrder(order, basket, setCheckResponse, dispatchInformModalWindow)

    useEffect(() => {
        if (!basket.sum) router.push(rootRoute())
    }, [])

    return (
        <form
            css={css(styles.form)}
            onSubmit={event => {
                event.preventDefault()
                const requestBody = getMakeOrderRequestBody(order, basket, dispatchInformModalWindow)
                if (requestBody) makeOrder(requestBody, dispatchInformModalWindow, dispatchUser, dispatchBasket, router)
            }}
        >
            <H1Title
                order={order}
                checkedResponse={checkedResponse}
            />
            <div
                css={css(styles.contentContainer)}
            >
                <div
                    css={css(styles.leftContainer)}
                >
                    <DeliveryInfo
                        order={order}
                        dispatchOrder={dispatchOrder}
                    />
                    <PaymentSelector
                        order={order}
                        dispatchOrder={dispatchOrder}
                    />
                </div>
                <div
                    css={css(styles.rightContainer)}
                >
                    <BonusSlider
                        order={order}
                        dispatchOrder={dispatchOrder}
                        user={user}
                        maxBonuses={maxBonuses}
                    />
                    <PromotionsSection
                        checkedResponse={checkedResponse}
                    />
                </div>
            </div>
            <SubmitButton
                checkedResponse={checkedResponse}
            />
        </form>
    )
}

export default Content