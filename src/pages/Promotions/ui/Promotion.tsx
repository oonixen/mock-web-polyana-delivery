import React from "react";
import {IPromotion} from "../interfaces/ui";
import Image from "next/image";
import {Button} from "@mui/material";
import {css} from "@emotion/react";
import {styles} from "../styles/promotion";
import {base64} from "../../../app";
import {stylesMuiButtonText} from "../../../../styles/modules/stylesMuiButtonText";
import Link from "next/link";
import {addQueryParameter} from "../../../processes/Navigation";
import {navigation} from "../../../shared/PromotionModalWindow";

const Promotion: React.FC<IPromotion> = ({promotion, router}) => {

    return (
        <article
            css={css(styles.article)}
        >
            <figure
                css={css(styles.figure)}
            >
                <Image
                    css={css(styles.image)}
                    src={promotion.image}
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
                <h1
                    css={css(styles.h1)}
                >
                    {promotion.name}
                </h1>
                <span
                    css={css(styles.description)}
                >
                    {promotion.description}
                </span>
                <nav
                    css={css(styles.buttonContainer)}
                >
                    <Link
                        href={promotion.link}
                    >
                        <a>
                            <Button
                                css={css(styles.button)}
                            >
                                <span
                                    css={css(stylesMuiButtonText.text)}
                                >
                                    Хочу
                                </span>
                            </Button>
                        </a>
                    </Link>
                    <a>
                        <Button
                            css={css(styles.button)}
                            variant={"outlined"}
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
                            <span
                                css={css(stylesMuiButtonText.text)}
                            >
                                Подробнее
                            </span>
                        </Button>
                    </a>
                </nav>
            </div>
        </article>
    )
}

export default Promotion