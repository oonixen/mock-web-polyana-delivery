import ModalWindow from "../../../shared/ModalWindow";
import React, {useMemo} from "react";
import {IDishModalWindow} from "../interfaces/ui";
import {getAllDishes, getDishImage} from "../model/functions";
import {getIndexByParam} from "../../../features/Array";
import {ProductDetail} from "../../../../api";
import {deleteQueryParameter} from "../../../processes/Navigation";
import {navigation} from "../constants/navigation";
import {css} from "@emotion/react";
import {styles} from "../styles/dishModalWindow";
import Image from "next/image";
import {base64} from "../../../app";
import DishTags from "./DishTags";
import {Info} from "../../../shared/Icons";
import DishModalWindowContainer from "../../../shared/DishModalWindowContainer";
import DishAddButton from "../../../shared/DishAddButton";

const DishModalWindow: React.FC<IDishModalWindow> = ({
    router,
    data,
    basket,
    dispatchBasket,
    dispatchInformModalWindow
}) => {

    const dishId = String(router.query[navigation.dishModalWindowQueryParam])
    const allDishes = useMemo(() => getAllDishes(data), [])
    const dish = allDishes[
        getIndexByParam<ProductDetail, string>(allDishes, dishId, (value) => value.id)
    ]
    const hideAction = () => router.push(
        deleteQueryParameter(window.location.toString(), navigation.dishModalWindowQueryParam),
        undefined,
        {shallow: true}
    )

    return (
        <ModalWindow
            isShow={Boolean(dish)}
            onClickHide={hideAction}
        >
            {
                dish && (
                    <DishModalWindowContainer
                        sum={dish.price}
                        onClickAddButton={() => {}}
                        Button={
                            <DishAddButton
                                title={"Добавить"}
                                dish={dish}
                                basket={basket}
                                dispatchBasket={dispatchBasket}
                                dispatchInformModalWindow={dispatchInformModalWindow}
                                stylesButton={css(styles.addButton)}
                                onClickAction={hideAction}
                            />
                        }
                    >
                        <div
                            css={css(styles.innerContainer)}
                        >
                            <div>
                                <figure
                                    css={css(styles.figure)}
                                >
                                    <Image
                                        css={css(styles.image)}
                                        src={getDishImage(dish.image)}
                                        alt={dish.name}
                                        placeholder={"blur"}
                                        blurDataURL={base64.pngImageGreyColor}
                                        layout={"fill"}
                                        objectFit={"cover"}
                                    />
                                </figure>
                            </div>
                            <div
                                css={css(styles.infoContainer)}
                            >
                                <div
                                    css={css(styles.headerContainer)}
                                >
                                    <h1
                                        css={css(styles.h1)}
                                    >
                                        {dish.name}
                                    </h1>
                                    <div
                                        css={css(styles.svgContainer)}
                                    >
                                        <div
                                            css={css(styles.popUpSection)}
                                        >
                                            <div>
                                                <span>
                                                    Энерг. ценность
                                                </span>
                                                <span>
                                                    {dish.nutritionFact.energyValue}
                                                </span>
                                            </div>
                                            <div>
                                                <span>
                                                    Белки
                                                </span>
                                                <span>
                                                    {dish.nutritionFact.protein}
                                                </span>
                                            </div>
                                            <div>
                                                <span>
                                                    Жиры
                                                </span>
                                                <span>
                                                    {dish.nutritionFact.fat}
                                                </span>
                                            </div>
                                            <div>
                                                <span>
                                                    Углеводы
                                                </span>
                                                <span>
                                                    {dish.nutritionFact.carbohydrate}
                                                </span>
                                            </div>
                                            <div>
                                                <span>
                                                    Вес
                                                </span>
                                                <span>
                                                    {dish.weight}
                                                </span>
                                            </div>
                                        </div>
                                        <Info/>
                                    </div>
                                </div>
                                <div>
                                    <DishTags
                                        conceptionTags={data.tags}
                                        dishTags={dish.tags}
                                    />
                                </div>
                                <p
                                    css={css(styles.weight)}
                                >
                                    {dish.weight}
                                </p>
                                <p
                                    css={css(styles.description)}
                                >
                                    {dish.description}
                                </p>
                            </div>
                        </div>
                    </DishModalWindowContainer>
                )
            }
        </ModalWindow>
    )
}

export default DishModalWindow