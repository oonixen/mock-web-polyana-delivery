import {css} from "@emotion/react";
import {styles} from "../styles/headerCategoriesLinkSm";
import {Button} from "@mui/material";
import {stylesMuiButtonText} from "../../../../styles/modules/stylesMuiButtonText";
import React from "react";
import {IHeaderCategoriesLinkSm} from "../interfaces/ui";
import {addQueryParameter} from "../../../processes/Navigation";
import {navigation} from "../constants/navigation";

const HeaderCategoriesLinkSm: React.FC<IHeaderCategoriesLinkSm> = ({data, router}) => {
    return (
        <>
            {
                data.categories.map((category, index) => (
                    <li
                        key={category.id}
                        css={css(styles.li)}
                    >
                        <a
                            onClick={() => router.push(addQueryParameter(
                                    String(window.location),
                                    navigation.categoryQueryParam,
                                    String(index)
                                ),
                                undefined,
                                {shallow: true}
                            )}
                        >
                            <Button
                                css={css(styles.button)}
                            >
                                <span
                                    css={css(stylesMuiButtonText.text)}
                                >
                                    {category.title}
                                </span>
                            </Button>
                        </a>
                    </li>
                ))
            }
        </>
    )
}

export default HeaderCategoriesLinkSm