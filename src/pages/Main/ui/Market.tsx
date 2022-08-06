import React from "react";
import {IMarket} from "../interfaces/ui";
import {css} from "@emotion/react";
import {styles} from "../styles/market";
import Image from "next/image";
import {base64, conceptionRoute} from "../../../app";
import ConceptionBadge from "../../../shared/ConceptionBadge";
import {showInformModalWindow} from "../../../processes/Context";

export const Market: React.FC<IMarket> = ({market, dispatchInformModalWindow, address, router}) => {

    return (
        <li>
            <a
                css={css(styles.link)}
                onClick={() => {
                    if (market.isAvailable) router.push(conceptionRoute(market.id, address))
                    else showInformModalWindow(dispatchInformModalWindow, market.notAvailableDescription)
                }}
            >
                <Image
                    src={market.imageBanner}
                    alt={market.name}
                    placeholder={"blur"}
                    blurDataURL={base64.pngImageGreyColor}
                    layout={"fill"}
                    objectFit={"cover"}
                />
                <ConceptionBadge conception={market}/>
            </a>
        </li>
    )
}