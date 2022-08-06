import React from "react";
import {IDishGrid} from "../interfaces/ui";
import {styles} from "../styles/dishGrid";
import {css} from "@emotion/react";
import Dish from "./Dish";

const DishGrid: React.FC<IDishGrid> = ({
    dishes,
    data,
    router,
    basket,
    dispatchBasket,
    dispatchInformModalWindow
}) => {

    return (
        <div
            css={css(styles.grid)}
        >
            {
                dishes.map(dish => {
                    return (
                        <Dish
                            key={dish.id}
                            dish={dish}
                            tags={data.tags}
                            router={router}
                            basket={basket}
                            dispatchBasket={dispatchBasket}
                            dispatchInformModalWindow={dispatchInformModalWindow}
                        />
                )})
            }
        </div>
    )
}

export default DishGrid