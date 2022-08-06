import {css} from "@emotion/react";
import {styles} from "../styles/deliveryTypeSwitcher";
import {Courier, Market} from "../../../shared/Icons";
import React from "react";
import {IDeliveryTypeSwitcher} from "../interfaces/ui";
import {deliveryTypes} from "../../../entities/Order";
import {setOrder} from "../../../processes/Context";

const DeliveryTypeSwitcher: React.FC<IDeliveryTypeSwitcher> = ({
    order,
    dispatchOrder
}) => {

    const deliveryType = order.deliveryType
    const deliveryStyle =
        css(styles.button, deliveryType === deliveryTypes.delivery && styles.buttonChosen)
    const selfDeliveryStyle =
        css(styles.button, deliveryType === deliveryTypes.selfDelivery && styles.buttonChosen)

    return (
        <div
            css={css(styles.buttonContainer)}
        >
            <button
                type={"button"}
                css={deliveryStyle}
                onClick={() => {
                    // @ts-ignore
                    setOrder({dispatch: dispatchOrder, deliveryType: deliveryTypes.delivery})
                }}
            >
                <figure
                    css={css(styles.figure)}
                >
                    <Courier/>
                </figure>
                <span>
                        Доставка
                    </span>
            </button>
            <button
                type={"button"}
                css={selfDeliveryStyle}
                onClick={() => {
                    // @ts-ignore
                    setOrder({dispatch: dispatchOrder, deliveryType: deliveryTypes.selfDelivery})
                }}
            >
                <figure
                    css={css(styles.figure)}
                >
                    <Market/>
                </figure>
                <span>
                        Самовывоз
                    </span>
            </button>
        </div>
    )
}

export default DeliveryTypeSwitcher