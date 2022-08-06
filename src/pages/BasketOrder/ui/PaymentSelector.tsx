import {css} from "@emotion/react";
import {styles} from "../styles/paymentSelector";
import React from "react";
import {IPaymentSelector} from "../interfaces/ui";
import {setPaymentMethod} from "../model/functions";
import {stylesSelectorArrow} from "../../../../styles/modules/stylesSelectorArrow";

const PaymentSelector: React.FC<IPaymentSelector> = ({
    order,
    dispatchOrder
}) => {

    return (
        <div
            css={css(styles.paymentContainer)}
        >
            <p
                css={css(styles.paymentText)}
            >
                Способ оплаты
            </p>
            <select
                value={order.paymentMethod?.id}
                css={css(styles.selector, stylesSelectorArrow)}
                required={true}
                onChange={v =>
                    setPaymentMethod(v.target.value, order.paymentMethods, dispatchOrder)
                }
            >
                <option
                    value={""}
                >
                    Выбрать
                </option>
                {
                    order.paymentMethods.map(paymentMethod => (
                        <option
                            key={paymentMethod.id}
                            value={paymentMethod.id}
                        >
                            {paymentMethod.name}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}

export default PaymentSelector