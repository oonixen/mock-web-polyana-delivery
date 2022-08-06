import React from "react";
import {IRestaurantsGrid} from "../interfaces/ui";
import Image from "next/image";
import {styles} from "../styles/restaurantsGrid"
import {css} from "@emotion/react";
import {base64, conceptionRoute} from "../../../app";
import ConceptionBadge from "../../../shared/ConceptionBadge";
import {useRouter} from "next/router";
import {showInformModalWindow, useDeliveryAddressContext} from "../../../processes/Context";

export const RestaurantsGrid: React.FC<IRestaurantsGrid> = ({restaurants, dispatchInformModalWindow}) => {

    const router = useRouter()
    const [{address}] = useDeliveryAddressContext()

    return (
        <>
            {
                restaurants.map(restaurant => {
                    return (
                        <li
                            key={restaurant.id}
                        >
                            <a
                                css={css(styles.restaurantBlock)}
                                onClick={() => {
                                    // @ts-ignore
                                    if (restaurant.isAvailable) router.push(conceptionRoute(restaurant.id, address))
                                    else showInformModalWindow(dispatchInformModalWindow, restaurant.notAvailableDescription)
                                }}
                            >
                                <div
                                    css={css(styles.imageBlock)}
                                >
                                    <Image
                                        src={restaurant.imageBanner}
                                        alt={restaurant.name}
                                        layout={"fill"}
                                        objectFit={"cover"}
                                        placeholder={"blur"}
                                        blurDataURL={base64.pngImageGreyColor}
                                    />
                                    <ConceptionBadge
                                        conception={restaurant}
                                        isShowBackgroundTransparency={true}
                                    />
                                    <div
                                        css={css(styles.additionTextBlock)}
                                    >
                                        <span>
                                            {restaurant.additionText}
                                        </span>
                                    </div>
                                </div>
                                <span
                                    css={css(styles.name)}
                                >
                                    {restaurant.name}
                                </span>
                                <span
                                    css={css(styles.description)}
                                >
                                    {restaurant.description}
                                </span>
                            </a>
                        </li>
                    )
                })
            }
        </>
    )
}