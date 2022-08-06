import {css} from "@emotion/react";
import {styles} from "../styles/main";
import Image from "next/image";
import vkImage from "../../../../public/vk.svg"
import telegramImage from "../../../../public/telegram.svg"
import {stylesPageHorizontalPadding} from "../../../../styles/modules/stylesPageHorizontalPadding";
import React from "react";
import {IFooter} from "./interfaces";
import {footerTypes} from "../constants/footerType";
import {AppStore, GooglePlay} from "../../Icons";
import {hrefs} from "../../../app";

const Footer: React.FC<IFooter> = ({
    type= footerTypes.withAppHrefs
}) => {

    return (
        <footer
            css={css(styles.footer, stylesPageHorizontalPadding.marginIndent)}
        >
            <div
                css={css(styles.textBlock)}
            >
                {
                    type === footerTypes.withDescription ?
                        <>
                            <p>
                                ООО «Поляна»
                            </p>
                            <p>
                                Юридический адрес: 443086, г. Самара, ул. Ерошевского, д. 18, оф. 219
                            </p>
                            <p>
                                Почтовый адрес: 443013, г. Самара, ул. Коммунистическая, 90
                            </p>
                            <p>
                                ИНН/КПП 6316204690/631601001 ОГРН 1146316010543
                            </p>
                        </>
                        :
                         <p>
                             Polyana Delivery
                         </p>
                }
            </div>
            <div
                css={css(styles.imageBlock)}
            >
                {
                    type === footerTypes.withAppHrefs &&
                        <>
                            <a
                                href={hrefs.playMarket}
                                target={"_blank"}
                                rel="noreferrer"
                                css={css(styles.a, styles.bigIcon)}
                            >
                                <GooglePlay/>
                            </a>
                            <a
                                href={hrefs.appStore}
                                target={"_blank"}
                                rel="noreferrer"
                                css={css(styles.a, styles.bigIcon)}
                            >
                                <AppStore/>
                            </a>
                        </>
                }
                <a
                    href={"https://vk.com/polyana.delivery"}
                    target={"_blank"}
                    rel="noreferrer"
                    css={css(styles.a, styles.littleIcon)}
                >
                    <Image
                        src={vkImage}
                        layout={"fill"}
                        objectFit={"contain"}
                        alt={"vk"}
                    />
                </a>
                <a
                    href={"https://t.me/polyanadelivery"}
                    target={"_blank"}
                    rel="noreferrer"
                    css={css(styles.a, styles.littleIcon)}
                >
                    <Image
                        src={telegramImage}
                        layout={"fill"}
                        objectFit={"contain"}
                        alt={"Telegram"}
                    />
                </a>
            </div>
        </footer>
    )
}

export default Footer