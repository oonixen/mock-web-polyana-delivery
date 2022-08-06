import {css} from "@emotion/react";
import {styles} from "../styles/bonusSlider";
import {Button, Slider} from "@mui/material";
import React, {useEffect, useState} from "react";
import {Bonus} from "../../../shared/Icons";
import {stylesMuiButtonText} from "../../../../styles/modules/stylesMuiButtonText";
import {IBonusSlider} from "../interfaces/ui";
import {setOrder} from "../../../processes/Context";

const BonusSlider: React.FC<IBonusSlider> = ({
    order,
    dispatchOrder,
    user,
    maxBonuses
}) => {

    const [bonuses, setBonuses] = useState(order.bonuses)
    let jsx = <p>Войдите в аккаунт для использования бонусов</p>

    useEffect(() => {
        setBonuses(order.bonuses)
    }, [order.bonuses])

    if (user.user) {
        jsx =
            <>
                <p
                    css={css(styles.mainText)}
                >
                    Использовать бонусы:
                </p>
                <p
                    css={css(styles.descriptionText)}
                >
                    Оплачивай до 30%
                    <br></br>
                    от стоимости заказа
                </p>
                <p
                    css={css(styles.chosenBonuses)}
                >
                    {bonuses}
                </p>
                <div
                    css={css(styles.sliderContainer)}
                >
                    <Slider
                        value={bonuses}
                        max={maxBonuses}
                        onChange={(event, value) => setBonuses(value as number)}
                    />
                </div>
                <p
                    css={css(styles.bottomText)}
                >
                    У вас
                    {" "}
                    <figure
                        css={css(styles.figure)}
                    >
                        <Bonus/>
                    </figure>
                    {` ${user.user.bonus} `}
                    бонусов
                </p>
                <Button
                    css={css(styles.button)}
                    onClick={() =>
                        // @ts-ignore
                        setOrder({dispatch: dispatchOrder, bonuses})
                    }
                >
                    <span
                        css={css(stylesMuiButtonText.text)}
                    >
                        Применить
                    </span>
                </Button>
            </>
    }

    return (
        <div
            css={css(styles.container)}
        >
            {jsx}
        </div>
    )
}

export default BonusSlider