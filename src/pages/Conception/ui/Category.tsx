import {css} from "@emotion/react";
import {styles} from "../styles/category";
import DishGrid from "./DishGrid";
import React from "react";
import {ICategory} from "../interfaces/ui";

const Category: React.FC<ICategory> = ({
    category,
    data,
    router,
    basket,
    dispatchBasket,
    dispatchInformModalWindow
}) => {
    return (
        <div>
            <p
                css={css(styles.sectionName)}
            >
                {category.title}
            </p>
            <DishGrid
                dishes={category.products}
                data={data}
                router={router}
                basket={basket}
                dispatchInformModalWindow={dispatchInformModalWindow}
                dispatchBasket={dispatchBasket}
            />
        </div>
    )
}

export default Category