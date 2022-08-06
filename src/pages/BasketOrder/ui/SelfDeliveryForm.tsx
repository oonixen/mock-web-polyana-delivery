import React from "react";
import {ISelfDeliveryForm} from "../interfaces/ui";
import InputLayout from "./InputLayout";
import {setPickupPoint} from "../model/functions";
import {css} from "@emotion/react";
import {stylesSelectorArrow} from "../../../../styles/modules/stylesSelectorArrow";
import {styles} from "../styles/selfDeliveryForm"

const SelfDeliveryForm: React.FC<ISelfDeliveryForm> = ({
    order,
    dispatchOrder
}) => {

    return (
        <InputLayout
            label={"Пункт самовывоза:"}
        >
            <select
                css={css(stylesSelectorArrow, styles.select)}
                required={true}
                value={order.pickupPoint?.id}
                onChange={v => setPickupPoint(v.target.value, order.pickupPoints, dispatchOrder)}
            >
                <option
                    value={""}
                >
                    Выбрать
                </option>
                {
                    order.pickupPoints.map(pickupPoint => (
                        <option
                            key={pickupPoint.id}
                            value={pickupPoint.id}
                        >
                            {pickupPoint.address}
                        </option>
                    ))
                }
            </select>
        </InputLayout>
    )
}

export default SelfDeliveryForm