import ModalWindow from "../../../shared/ModalWindow";
import React from "react";
import {styles} from "../styles/main";
import {css} from "@emotion/react";
import {ICitiesModalWindow} from "../interfaces/ui";
import CityList from "./CityList";

const CitiesModalWindow: React.FC<ICitiesModalWindow> = ({
    isShow,
    cityDispatch,
    dispatchCityModalWindow,
    dispatchDeliveryAddressModalWindow,
    dispatchInformModalWindow,
    dispatchDeliveryAddress
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
                <ul
                    css={css(styles.list)}
                >
                    <CityList
                        cityDispatch={cityDispatch}
                        dispatchCityModalWindow={dispatchCityModalWindow}
                        dispatchDeliveryAddressModalWindow={dispatchDeliveryAddressModalWindow}
                        dispatchDeliveryAddress={dispatchDeliveryAddress}
                        dispatchInformModalWindow={dispatchInformModalWindow}
                    />
                </ul>
            </section>
        </ModalWindow>
    )
}

export default CitiesModalWindow