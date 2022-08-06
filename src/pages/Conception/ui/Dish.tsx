import {css} from "@emotion/react";
import {styles} from "../styles/dish";
import DishTags from "./DishTags";
import Image from "next/image";
import {base64, symbols} from "../../../app";
import React from "react";
import {IDish} from "../interfaces/ui";
import {addQueryParameter} from "../../../processes/Navigation";
import {navigation} from "../constants/navigation";
import {getDishImage} from "../model/functions";
import DishAddButton from "../../../shared/DishAddButton/";

const Dish: React.FC<IDish> = ({
    dish,
    tags,
    router,
    basket,
    dispatchBasket,
    dispatchInformModalWindow
}) => {

    return (
        <div
            key={dish.id}
            css={css(styles.dishContainer)}
        >
            <a
                css={css(styles.a)}
                onClick={() => router.push(
                    addQueryParameter(
                        window.location.toString(), navigation.dishModalWindowQueryParam, dish.id
                    ),
                    undefined,
                    {shallow: true}
                )}
            >
                <DishTags
                    conceptionTags={tags}
                    dishTags={dish.tags}
                    styleContainer={css(styles.tagContainer)}
                />
                <figure
                    css={css(styles.figure)}
                >
                    <Image
                        css={css(styles.image)}
                        src={getDishImage(dish.image)}
                        alt={""}
                        placeholder={"blur"}
                        blurDataURL={base64.pngImageGreyColor}
                        layout={"fill"}
                        objectFit={"cover"}
                    />
                </figure>
            </a>
            <p
                css={css(styles.name)}
            >
                {dish.name}
            </p>
            <p
                css={css(styles.description)}
            >
                {dish.description}
            </p>
            <div
                css={css(styles.bottomContainer)}
            >
                <span
                    css={css(styles.weight)}
                >
                    {dish.weight}
                </span>
                <DishAddButton
                    title={`${dish.price} ${symbols.ruble}`}
                    stylesButton={css(styles.button)}
                    dish={dish}
                    basket={basket}
                    dispatchInformModalWindow={dispatchInformModalWindow}
                    dispatchBasket={dispatchBasket}
                />
            </div>
        </div>
    )
}

export default Dish