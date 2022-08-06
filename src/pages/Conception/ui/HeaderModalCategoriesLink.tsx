import {css} from "@emotion/react";
import {styles} from "../styles/headerModalCategoriesLink";
import React from "react";
import {IModalCategoriesLink} from "../interfaces/ui";
import {useModalWindowEvents} from "../model/hooks";
import {addQueryParameter} from "../../../processes/Navigation";
import {navigation} from "../constants/navigation";

const HeaderModalCategoriesLink: React.FC<IModalCategoriesLink> = ({
    isShowModal,
    setIsShowModal,
    linksArr,
    router,
    dishLength
}) => {

    useModalWindowEvents(setIsShowModal)

    return (
        <nav
            style={{display: isShowModal ? "block" : "none"}}
            css={css(styles.nav)}
        >
            <ul>
                {
                    linksArr.map((link, index) => (
                        <li
                            key={index}
                            css={css(styles.li)}
                        >
                            <a
                                css={css(styles.a)}
                                onClick={() => router.push(addQueryParameter(
                                        String(window.location),
                                        navigation.categoryQueryParam,
                                        String(dishLength - linksArr.length + index)
                                    ),
                                    undefined,
                                    {shallow: false}
                                )}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default HeaderModalCategoriesLink