import ScrollContainer from "react-indiana-drag-scroll";
import React, {useEffect, useState} from "react";
import {IRecommendations} from "../interfaces/ui";
import {ProductDetail} from "../../../../api";
import {css} from "@emotion/react";
import {styles} from "../styles/recommendations";
import {Skeleton as MuiSkeleton} from "@mui/material";
import {getRecommendations} from "../api/getRecommendations";
import Image from "next/image";
import {getDishImage} from "../../Conception/model/functions";
import {base64} from "../../../app";
import DishAddButton from "../../../shared/DishAddButton";

const Recommendations: React.FC<IRecommendations> = ({
    dishes,
    basket,
    dispatchBasket,
    dispatchInformModalWindow
}) => {

    const [recommendations, setRecommendations] = useState<ProductDetail[]>([])

    useEffect(() => {
        if (dishes.length === 0) return
        getRecommendations(dishes[0].conceptionId, dishes, setRecommendations)
    }, [])

    return (
        <div
            css={css(styles.recommendationsContainer)}
        >
            <p
                css={css(styles.p)}
            >
                Рекомендуем
            </p>
            <ScrollContainer
                css={css(styles.scrollContainer)}
                vertical={false}
            >
                {
                    recommendations.length === 0 &&
                        <MuiSkeleton
                            variant="rectangular"
                            height={"100%"}
                        />
                }
                {
                    recommendations.map(dish => (
                        <div
                            key={dish.id}
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
                                <DishAddButton
                                    stylesButton={css(styles.button)}
                                    title={`${dish.price}Р`}
                                    dish={dish}
                                    basket={basket}
                                    dispatchBasket={dispatchBasket}
                                    dispatchInformModalWindow={dispatchInformModalWindow}
                                />
                            </div>
                        </div>
                    ))
                }
            </ScrollContainer>
        </div>
    )
}

export default Recommendations