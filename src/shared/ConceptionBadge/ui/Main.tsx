import {styles} from "../styles/main"
import {css} from "@emotion/react";
import React from "react";
import {IConceptionBadge} from "../interfaces/ui";
import {symbols} from "../../../app/constants";
import {Courier, Clock} from "../../Icons";

const ConceptionBadge: React.FC<IConceptionBadge> = ({conception, isShowBackgroundTransparency = false}) => {

    return (
        <div
            css={css(styles.block, isShowBackgroundTransparency ? styles.blockTransparency : {})}
        >
            <div
                css={css(styles.badge)}
            >
                <div
                    css={css(styles.svgBlock)}
                >
                    <Courier/>
                </div>
                <span>
                    {conception.deliveryTime}
                </span>
            </div>
            <div
                css={css(styles.badge)}
            >
                <div
                    css={css(styles.svgBlock)}
                >
                    <Clock/>
                </div>
                <span>
                    {conception.workTime}
                </span>
            </div>
            <div
                css={css(styles.badge, styles.costlinessBadge)}
            >
                <span>
                    {`${symbols.ruble}`}
                </span>
                <span
                    css={css(conception.costliness < 2 ? styles.costlinessTransparency : {})}
                >
                    {`${symbols.ruble}`}
                </span>
                <span
                    css={css(conception.costliness < 3 ? styles.costlinessTransparency : {})}
                >
                    {`${symbols.ruble}`}
                </span>
            </div>
        </div>
    )
}

export default ConceptionBadge