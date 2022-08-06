import React from "react";
import {ICategorySection} from "../interfaces/ui";
import DishModalWindow from "./DishModalWindow";
import {useRouter} from "next/router";
import {useReturnJsxCategorySection} from "../model/hooks";
import {selectors} from "../constants/selectors";
import {useBasketContext, useInformModalWindowContext} from "../../../processes/Context";
import {useSetConceptionOrderInfo} from "../../../entities/Order";

const CategorySection: React.FC<ICategorySection> = ({data}) => {

    const [basket, dispatchBasket] = useBasketContext()
    const [{}, dispatchInformModalWindow] = useInformModalWindowContext()
    const router = useRouter()
    const jsx = useReturnJsxCategorySection(data, router, basket, dispatchBasket, dispatchInformModalWindow)

    useSetConceptionOrderInfo(basket, data)

    return (
        <section
            id={selectors.categorySectionId}
        >
            <div>
                {jsx}
            </div>
            <DishModalWindow
                router={router}
                data={data}
                basket={basket}
                dispatchInformModalWindow={dispatchInformModalWindow}
                dispatchBasket={dispatchBasket}
            />
        </section>
    )
}

export default CategorySection