import {css} from "@emotion/react";
import {styles} from "../styles/promotionsSection";
import React from "react";
import {IPromotionsSection} from "../interfaces/ui";

const PromotionsSection: React.FC<IPromotionsSection> = ({
    checkedResponse
}) => {

    if (!checkedResponse?.appliedPromotions?.length) return null

    return (
        <div
            css={css(styles.container)}
        >
            {
                checkedResponse.appliedPromotions?.map((promotion, index) => (
                    <p
                        key={index}
                        css={css(styles.p)}
                    >
                        {promotion}
                    </p>
                ))
            }
        </div>
    )
}

export default PromotionsSection