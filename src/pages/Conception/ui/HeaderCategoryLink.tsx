import {css} from "@emotion/react";
import {styles} from "../styles/headerCategoryLink";
import {Button} from "@mui/material";
import {stylesMuiButtonText} from "../../../../styles/modules/stylesMuiButtonText";
import React from "react";
import {IHeaderCategoryLink} from "../interfaces/ui";
import {addQueryParameter} from "../../../processes/Navigation";
import {navigation} from "../constants/navigation";

const HeaderCategoryLink: React.FC<IHeaderCategoryLink> = ({
    category,
    classLinks,
    styleButton,
    router,
    index
}) => (
    <li
        className={classLinks}
        css={css(styles.li)}
    >
        <Button
            css={css(styleButton)}
            onClick={() => router.push(
                addQueryParameter(
                    String(window.location),
                    navigation.categoryQueryParam,
                    String(index)
                ),
                undefined,
                {shallow: true}
            )}
        >
            <span
                css={css(stylesMuiButtonText.text)}
            >
                {category.title}
            </span>
        </Button>
    </li>
)

export default HeaderCategoryLink