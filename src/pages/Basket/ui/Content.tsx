import {
    clearBasket,
    setOrder,
    useBasketContext,
    useInformModalWindowContext,
    useOrderContext
} from "../../../processes/Context";
import Stub from "./Stub";
import {css} from "@emotion/react";
import {styles} from "../styles/content";
import Dishes from "./Dishes";
import Recommendations from "./Recommendations";
import Counter from "./Counter";
import {Button} from "@mui/material";
import Link from "next/link";
import {basketOrderRoute} from "../../../app";
import {stylesMuiButtonText} from "../../../../styles/modules/stylesMuiButtonText";

const Content = () => {

    const [basket, dispatchBasket] = useBasketContext()
    const [, dispatchInformModalWindow] = useInformModalWindowContext()
    const [order, dispatchOrder] = useOrderContext()
    const {
        promocode,
        people
    } = order

    if (basket.dishes.length === 0) return <Stub/>

    return (
        <div
            css={css(styles.container)}
        >
            <h1>
                Корзина
            </h1>
            <div
                css={css(styles.sumAndButtonContainer)}
            >
                <p>
                   {`${basket.dishes.length} товара на `}
                    <span
                        css={css(styles.sum)}
                    >
                        {`${basket.sum} Р`}
                    </span>
                </p>
                <button
                    css={css(styles.button)}
                    onClick={() => clearBasket({dispatch: dispatchBasket})}
                >
                    <span>
                        Очистить
                    </span>
                    <br></br>
                    <span>
                        корзину
                    </span>
                </button>
            </div>
            <Dishes
                basket={basket}
                dispatchBasket={dispatchBasket}
            />
            <Recommendations
                dishes={basket.dishes}
                basket={basket}
                dispatchBasket={dispatchBasket}
                dispatchInformModalWindow={dispatchInformModalWindow}
            />
            <div
                css={css(styles.additionInfoContainer)}
            >
                <p
                    css={css(styles.title)}
                >
                    Количество приборов:
                </p>
                <Counter
                    count={people}
                    decrease={() => {
                        if (people > 0) {
                            // @ts-ignore
                            setOrder({dispatch: dispatchOrder, people: people - 1})
                        }
                    }}
                    increase={() => {
                        // @ts-ignore
                        setOrder({dispatch: dispatchOrder, people: people + 1})
                    }}
                />
            </div>
            <div
                css={css(styles.additionInfoContainer)}
            >
                <p
                    css={css(styles.title)}
                >
                    Промокод:
                </p>
                <input
                    css={css(styles.input)}
                    type={"text"}
                    placeholder={"Ввести промокод"}
                    value={promocode}
                    onChange={(value) => {
                        // @ts-ignore
                        setOrder({dispatch: dispatchOrder, promocode: value.target.value})
                    }}
                />
            </div>
            <Link
                href={basketOrderRoute()}
            >
                <a
                    css={css(styles.createOrderA)}
                >
                    <Button
                        css={css(styles.createOrderButton)}
                    >
                        <span
                            css={css(stylesMuiButtonText.text)}
                        >
                            Оформить заказ
                        </span>
                    </Button>
                </a>
            </Link>
        </div>
    )
}

export default Content