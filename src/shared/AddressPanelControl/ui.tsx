import {GeoPosition} from "../Icons";
import {css} from "@emotion/react";
import {styles} from "./styles"
import {
    setCityModalWindow, setDeliveryAddressModalWindow,
    useCityModalWindowContext, useDeliveryAddressContext,
    useDeliveryAddressModalWindowContext
} from "../../processes/Context";
import {add} from "dom7";
import React from "react";
import {IAddressPanelControl} from "./interfaces";

const AddressPanelControl: React.FC<IAddressPanelControl> = ({
    styleBlock= {}
}) => {

    const [{}, dispatchCityModalWindow] = useCityModalWindowContext()
    const [{}, dispatchDeliveryAddressModalWindow] = useDeliveryAddressModalWindowContext()
    const [{address}] = useDeliveryAddressContext()

    return (
        <div
            css={css(styles.block, styleBlock)}
        >
            <button
                css={css(styles.button)}
                onClick={() => setCityModalWindow({dispatch: dispatchCityModalWindow, isShow: true})}
            >
                <div
                    css={css(styles.buttonBlock)}
                >
                    <span>
                        Самара
                    </span>
                </div>
            </button>
            <button
                css={css(styles.button, styles.buttonAddress)}
                onClick={() => setDeliveryAddressModalWindow({dispatch: dispatchDeliveryAddressModalWindow, isShow: true})}
            >
                <div
                    css={css(styles.buttonBlock, styles.addressButtonBlock)}
                >
                    <span
                        css={css(styles.addressSpan)}
                    >
                        {address ? address.name : 'укажите свой адрес'}
                    </span>
                    <div
                        css={css(styles.svgBlock)}
                    >
                        <GeoPosition/>
                    </div>
                </div>
            </button>
        </div>
    )
}

export default AddressPanelControl