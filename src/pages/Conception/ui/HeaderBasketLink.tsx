import {Basket} from "../../../shared/Icons";
import HeaderLink from "../../../shared/HeaderLink";
import {basketRoute, symbols} from "../../../app";
import React from "react";
import {IHeaderBasketLink} from "../interfaces/ui";
import {css} from "@emotion/react";
import {useBasketContext} from "../../../processes/Context";

const HeaderBasketLink: React.FC<IHeaderBasketLink> = ({
    style= {}
}) => {

    const [{sum}] = useBasketContext()

    return (
        <HeaderLink
            href={basketRoute()}
            text={`${sum} ${symbols.ruble}`}
            Icon={<Basket/>}
            styleLink={css(style)}
        />
    )
}

export default HeaderBasketLink