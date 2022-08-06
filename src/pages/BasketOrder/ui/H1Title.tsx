import {css} from "@emotion/react";
import {styles} from "../styles/h1Title";
import {symbols} from "../../../app";
import {Bonus} from "../../../shared/Icons";
import React from "react";
import {IH1Title} from "../interfaces/ui";

const H1Title: React.FC<IH1Title> = ({
    order    ,
    checkedResponse
}) => {

    const jsxBonuses = (
        order.bonuses > 0 &&
        <>
            <span>
                применено
            </span>
            {" "}
            <figure
                css={css(styles.figure)}
            >
                <Bonus/>
            </figure>
            <span
                css={css(styles.bonusText)}
            >
                {` ${order.bonuses}`}
            </span>
        </>
    )

    const jsxCheckedResponse = (
        checkedResponse && (
            <>
                <span
                    css={css(styles.sumText)}
                >
                    {` на ${checkedResponse.orderSum} ${symbols.ruble} `}
                </span>
                {
                    jsxBonuses
                }
            </>
        )
    )

    return (
        <h1
            css={css(styles.h1)}
        >
            <span>
                Оформление заказа
            </span>
            {
                jsxCheckedResponse
            }
        </h1>
    )
}

export default H1Title