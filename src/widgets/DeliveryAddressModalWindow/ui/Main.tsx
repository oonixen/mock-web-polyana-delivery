import ModalWindow from "../../../shared/ModalWindow"
import {styles} from "../styles/main";
import {InputAndMap} from "./InputAndMap";
import {css} from "@emotion/react";
import React from "react";
import {IDeliveryAddressModalWindow} from "../interfaces/ui";

const DeliveryAddressModalWindow: React.FC<IDeliveryAddressModalWindow> = ({
    isShow,
    dispatchInformModalWindow,
    address,
    dispatchDeliveryAddressModalWindow,
    dispatchAddress
}) => {

    if (!isShow) return null

    return (
        <ModalWindow
            isShow={isShow}
            isShowHideButton={false}
        >
            <section
                css={css(styles.section)}
            >
                <h1
                    css={css(styles.h1)}
                >
                    Укажите адрес
                </h1>
                <span
                    css={css(styles.span)}
                >
                            от него зависит актуальность меню
                        </span>
                <InputAndMap
                    dispatchInformModalWindow={dispatchInformModalWindow}
                    address={address}
                    dispatchDeliveryAddressModalWindow={dispatchDeliveryAddressModalWindow}
                    dispatchAddress={dispatchAddress}
                />
            </section>
        </ModalWindow>
    );
}

export default DeliveryAddressModalWindow