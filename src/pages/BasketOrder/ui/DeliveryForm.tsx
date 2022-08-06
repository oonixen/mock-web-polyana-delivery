import InputLayout from "./InputLayout";
import React, {useEffect} from "react";
import {css} from "@emotion/react";
import {styles} from "../styles/deliveryForm";
import {IDeliveryForm} from "../interfaces/ui";
import {
    setDeliveryAddressModalWindow, setOrder,
    useDeliveryAddressContext,
    useDeliveryAddressModalWindowContext
} from "../../../processes/Context";

const DeliveryForm: React.FC<IDeliveryForm> = ({
    order,
    dispatchOrder
}) => {

    const [{address}] = useDeliveryAddressContext()
    const [, dispatchDeliveryAddressModalWindow] = useDeliveryAddressModalWindowContext()

    useEffect(() => {
        // @ts-ignore
        setOrder({dispatch: dispatchOrder, address: address})
    }, [address])

    return (
        <>
            <InputLayout
                label={"Улица, дом:"}
            >
                <input
                    css={css(styles.addressInput)}
                    value={order.address?.name}
                    required={true}
                    onClick={() => {
                        setDeliveryAddressModalWindow({dispatch: dispatchDeliveryAddressModalWindow, isShow: true})
                    }}
                />
            </InputLayout>
            <div
                css={css(styles.inlineContainer)}
            >
                <InputLayout
                    containerStyles={css(styles.containerStyles, styles.entrance)}
                    label={"Подъезд:"}
                >
                    <input
                        value={order.entrance}
                        onChange={v =>
                            // @ts-ignore
                            setOrder({dispatch: dispatchOrder, entrance: v.target.value})
                        }
                    />
                </InputLayout>
                <InputLayout
                    containerStyles={css(styles.containerStyles, styles.flat)}
                    label={"Квартира:"}
                >
                    <input
                        value={order.flat}
                        onChange={v =>
                            // @ts-ignore
                            setOrder({dispatch: dispatchOrder, flat: v.target.value})
                        }
                    />
                </InputLayout>
                <InputLayout
                    containerStyles={css(styles.containerStyles, styles.floor)}
                    label={"Этаж:"}
                >
                    <input
                        value={order.floor}
                        onChange={v =>
                            // @ts-ignore
                            setOrder({dispatch: dispatchOrder, floor: v.target.value})
                        }
                    />
                </InputLayout>
            </div>
        </>
    )
}

export default DeliveryForm