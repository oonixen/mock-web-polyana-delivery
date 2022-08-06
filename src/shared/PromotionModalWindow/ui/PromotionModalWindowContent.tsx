import React from "react";
import {IPromotionModalWindowContent} from "../interfaces/ui";
import Image from "next/image";
import {Button} from "@mui/material";
import Link from "next/link"
import {base64, promotionsRouteServerSide} from "../../../app";
import {css} from "@emotion/react";
import {styles} from "../styles/promotionModalWindowContent";
import {stylesMuiButtonText} from "../../../../styles/modules/stylesMuiButtonText";

const PromotionModalWindowContent: React.FC<IPromotionModalWindowContent> = ({
    promotion,
    isShowAllPromotionsButton,
    cityFiasId
}) => {

    return (
        <article
            css={css(styles.article)}
        >
            <figure
                css={css(styles.figure)}
            >
                <Image
                    css={css(styles.image)}
                    alt={promotion.name}
                    src={promotion.image}
                    placeholder={"blur"}
                    blurDataURL={base64.pngImageGreyColor}
                    layout={"fill"}
                    objectFit={"cover"}
                />
            </figure>
            <div
                css={css(styles.infoSection)}
            >
                <h1
                    css={css(styles.h1)}
                >
                    {promotion.name}
                </h1>
                <span
                    css={css(styles.span)}
                >
                    {promotion.description}
                </span>
            </div>
            <nav
                css={css(styles.nav)}
            >
                <Link
                    href={promotion.link}
                >
                    <a>
                        <Button
                            color={"primary"}
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
                {
                    isShowAllPromotionsButton &&
                        <Link
                            href={promotionsRouteServerSide(cityFiasId)}
                        >
                            <a>
                                <Button
                                    css={css(styles.button)}
                                    variant={"outlined"}
                                >
                                <span
                                    css={css(stylesMuiButtonText.text)}
                                >
                                    Все акции
                                </span>
                                </Button>
                            </a>
                        </Link>
                }
            </nav>
        </article>
    )
}

export default PromotionModalWindowContent