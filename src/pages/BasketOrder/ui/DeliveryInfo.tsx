import {css} from "@emotion/react";
import {styles} from "../styles/deliveryInfo";
import InputLayout from "./InputLayout";
import DeliveryTypeSwitcher from "./DeliveryTypeSwitcher";
import React from "react";
import {IDeliveryInfo} from "../interfaces/ui";
import InputMask from "react-input-mask";
import {clearPhoneMask, getPhoneMask} from "../../../features/Phone";
import {deliveryTypes} from "../../../entities/Order";
import DeliveryForm from "./DeliveryForm";
import {Radio, FormControlLabel} from "@mui/material";
import {stylesMuiButtonText} from "../../../../styles/modules/stylesMuiButtonText";
import {setOrder} from "../../../processes/Context";
import SelfDeliveryForm from "./SelfDeliveryForm";

const DeliveryInfo: React.FC<IDeliveryInfo> = ({
    order,
    dispatchOrder
}) => {

    return (
        <section
            css={css(styles.section)}
        >
            <DeliveryTypeSwitcher
                order={order}
                dispatchOrder={dispatchOrder}
            />
            <div
                css={css(styles.inputsContainer)}
            >
                <InputLayout
                    label={"Телефон:"}
                >
                    <InputMask
                        value={order.phone}
                        onChange={v =>
                            // @ts-ignore
                            setOrder({dispatch: dispatchOrder, phone: clearPhoneMask(v.target.value)})
                        }
                        required={true}
                        mask={getPhoneMask()}
                        placeholder={"+7(___)___-__-__"}
                    />
                </InputLayout>
                {
                    order.deliveryType === deliveryTypes.delivery ?
                        <DeliveryForm
                            order={order}
                            dispatchOrder={dispatchOrder}
                        />
                        :
                        <SelfDeliveryForm
                            order={order}
                            dispatchOrder={dispatchOrder}
                        />
                }
                <InputLayout
                    label={"Комментарий:"}
                >
                    <textarea
                        value={order.comment}
                        onChange={v =>
                            // @ts-ignore
                            setOrder({dispatch: dispatchOrder, comment: v.target.value})
                        }
                    />
                </InputLayout>
                <FormControlLabel
                    css={styles.callbackRadio}
                    control={
                        <Radio
                            checked={!order.callback}
                            onClick={() => {
                                // @ts-ignore
                                setOrder({dispatch: dispatchOrder, callback: !order.callback})
                            }}
                        />
                    }
                    label={
                        <span
                            css={css(stylesMuiButtonText.text)}
                        >
                            Не перезванивать
                        </span>
                    }
                />
            </div>
        </section>
    )
}

export default DeliveryInfo