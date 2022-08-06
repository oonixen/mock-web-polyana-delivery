import React, {useMemo} from "react";
import {IBannerSection} from "../interfaces/ui";
import {Swiper, SwiperSlide} from "swiper/react";
import Image from "next/image";
import {base64} from "../../../app";
import {css} from "@emotion/react";
import {styles} from "../styles/bannerSection";
import { Pagination, Autoplay } from "swiper";
import {useRouter} from "next/router";
import {addQueryParameter} from "../../../processes/Navigation";
import {navigation} from "../../../shared/PromotionModalWindow";

const BannerSection: React.FC<IBannerSection> = ({data}) => {

    const router = useRouter()

    return useMemo(() => (
        <section
            css={css(styles.section)}
        >
            <Swiper
                css={css(styles.swiper)}
                slidesPerView={1}
                loop={true}
                autoplay={{delay: 3000, disableOnInteraction: false,}}
                pagination={{clickable: true}}
                modules={[Pagination, Autoplay]}
            >
                {
                    data.promotions.map(promotion => (
                        <SwiperSlide
                            key={promotion.id}
                        >
                            <a
                                css={css(styles.a)}
                                onClick={() => {
                                    router.push(
                                        addQueryParameter(
                                            window.location.toString(), navigation.promotionQueryName, promotion.id
                                        ),
                                        undefined,
                                        {shallow: true}
                                    )
                                }}
                            >
                                <figure
                                    css={css(styles.figure)}
                                >
                                    <Image
                                        src={promotion.image}
                                        alt={""}
                                        placeholder={"blur"}
                                        blurDataURL={base64.pngImageGreyColor}
                                        layout={"fill"}
                                        objectFit={"cover"}
                                    />
                                </figure>
                            </a>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    ), [])
}

export default BannerSection