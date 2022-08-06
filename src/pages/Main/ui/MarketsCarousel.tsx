import React from "react";
import {IMarketsCarousel} from "../interfaces/ui";
import {variablesStyle} from "../variables/style";
import {css as cssClassName} from "@emotion/css";
import {styles} from "../styles/marketsCarousel";
import {Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {Market} from "./Market";
import {useDeliveryAddressContext} from "../../../processes/Context";
import {useRouter} from "next/router";

const MarketsCarousel: React.FC<IMarketsCarousel> = ({markets, dispatchInformModalWindow}) => {

    const [{address}] = useDeliveryAddressContext()
    const router = useRouter()

    return (
        <Swiper
            style={{height: variablesStyle.shopImageHeight}}
            className={cssClassName(styles.swiper)}
            slidesPerView={4}
            spaceBetween={20}
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
                0: {
                    slidesPerView: 1
                },
                700: {
                    slidesPerView: 2
                },
                1050: {
                    slidesPerView: 3
                },
                1400: {
                    slidesPerView: 4
                },
                1800: {
                    slidesPerView: 5
                }
            }}
        >
            {
                markets.map(market => (
                    <SwiperSlide
                        key={market.id}
                    >
                        <Market
                            market={market}
                            dispatchInformModalWindow={dispatchInformModalWindow}
                            //@ts-ignore
                            address={address}
                            router={router}
                        />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default MarketsCarousel