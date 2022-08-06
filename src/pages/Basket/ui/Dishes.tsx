import React from "react";
import {IDishes} from "../interfaces/ui";
import Image from "next/image";
import {getDishImage} from "../../Conception/model/functions";
import {base64} from "../../../app";
import {css} from "@emotion/react";
import {styles} from "../styles/dishes";
import Counter from "./Counter";
import {Multiply} from "../../../shared/Icons";
import Modifiers from "./Modifiers";
import {decreaseDishInBasket, deleteDishInBasket, increaseDishInBasket} from "../../../entities/Basket";

const Dishes: React.FC<IDishes> = ({basket, dispatchBasket}) => {

    return (
        <div
            css={css(styles.container)}
        >
            {
                basket.dishes.map((dish, index) => (
                    <div
                        key={dish.id + index}
                        css={css(styles.dishContainer)}
                    >
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
                        <div
                            css={css(styles.infoContainer)}
                        >
                            <p
                                css={css(styles.name)}
                            >
                                {dish.name}
                            </p>
                            {
                                dish.modifiers &&
                                    <div
                                        css={styles.modifiersContainer}
                                    >
                                        <Modifiers
                                            modifiers={dish.modifiers}
                                        />
                                    </div>
                            }
                        </div>
                        <Counter
                            count={dish.amount}
                            decrease={() => decreaseDishInBasket(dish, basket, dispatchBasket)}
                            increase={() => increaseDishInBasket(dish, basket, dispatchBasket)}
                        />
                        <p
                            css={css(styles.sum)}
                        >
                            {`${dish.price * dish.amount}Р`}
                        </p>
                        <button
                            css={css(styles.deleteButton)}
                            onClick={() => deleteDishInBasket(dish, basket, dispatchBasket)}
                        >
                            <Multiply/>
                        </button>
                    </div>
                ))
            }
        </div>
    )
}

export default Dishes