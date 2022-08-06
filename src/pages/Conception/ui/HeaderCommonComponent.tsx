import AddressPanelControl from "../../../shared/AddressPanelControl";
import HeaderText from "../../../shared/HeaderText";
import HeaderLink from "../../../shared/HeaderLink";
import {profileOrdersRoute, profileRoute, promotionsRouteServerSide} from "../../../app";
import {Percent} from "../../../shared/Icons";
import {Bonus} from "../../../shared/Icons/";
import React from "react";
import {IHeaderCommonComponent} from "../interfaces/ui";
import HeaderBasketLink from "./HeaderBasketLink";
import {css} from "@emotion/react";
import {useCityContext, useUserContext} from "../../../processes/Context";

const HeaderCommonComponent: React.FC<IHeaderCommonComponent> = ({
    headerText,
    isShowBasketLink,
    styleAddressPanel = {},
    styleHeaderText = {},
    stylePromotionLink = {},
    styleBasketLink = {},
    styleAccountLink = {}
}) => {

    const [{city}] = useCityContext()
    const [{user}] = useUserContext()

    return (
        <>
            <AddressPanelControl
                styleBlock={css(styleAddressPanel)}
            />
            <HeaderText
                text={`доставка: ${headerText}`}
                textStyle={css(styleHeaderText)}
            />
            <HeaderLink
                href={promotionsRouteServerSide(city?.cityFiasId as string)}
                text={"акции"}
                Icon={<Percent/>}
                styleLink={css(stylePromotionLink)}
            />
            {
                isShowBasketLink &&
                    <HeaderBasketLink
                        style={css(styleBasketLink)}
                    />
            }
            <HeaderLink
                href={user ? profileOrdersRoute() : profileRoute()}
                text={String(user ? user.bonus : 0)}
                Icon={<Bonus/>}
                styleLink={css(styleAccountLink)}
            />
        </>
    )
}

export default HeaderCommonComponent