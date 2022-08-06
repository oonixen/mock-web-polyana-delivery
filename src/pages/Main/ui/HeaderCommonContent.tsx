import AddressPanelControl from "../../../shared/AddressPanelControl";
import HeaderText from "../../../shared/HeaderText";
import {css} from "@emotion/react";
import {styles} from "../styles/headerCommonContent";
import {promotionsRouteServerSide, siteInfo} from "../../../app";
import HeaderLink from "../../../shared/HeaderLink";
import {Percent} from "../../../shared/Icons";
import React from "react";
import {IHeaderCommonContent} from "../interfaces/ui";
import {useCityContext} from "../../../processes/Context";

const HeaderCommonContent: React.FC<IHeaderCommonContent> = ({
    styleLink= {},
    styleAddressPanelControl= {},
    styleHeaderText = {}
}) => {

    const [{city}] = useCityContext()

    return (
        <>
            <AddressPanelControl
                styleBlock={css(styleAddressPanelControl)}
            />
            <HeaderText
                textStyle={css(styles.headerText, styleHeaderText)}
                text={`тел. ${siteInfo.DELIVERY_PHONE}`}
            />
            <HeaderLink
                // @ts-ignore
                href={promotionsRouteServerSide(city?.cityFiasId)}
                text={"акции"}
                Icon={<Percent/>}
                styleLink={css(styles.styleLink, styleLink)}
            />
        </>
    )
}

export default HeaderCommonContent