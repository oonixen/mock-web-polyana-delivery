import ScrollContainer from "react-indiana-drag-scroll";
import React, {useMemo} from "react";
import {IHeaderDishScrollGrid} from "../interfaces/ui";
import {css} from "@emotion/react";
import {styles} from "../styles/headerCategoryScrollGrid";
import HeaderCategoriesLinkSm from "./HeaderCategoriesLinkSm";
import {useRouter} from "next/router";

const HeaderCategoryScrollGrid: React.FC<IHeaderDishScrollGrid> = ({data}) => {

    const router = useRouter()
    const jsxLinks = useMemo(() => (<HeaderCategoriesLinkSm router={router} data={data}/>), [])

    return (
        <ScrollContainer
            css={css(styles.scrollContainer)}
        >
            <nav
                css={css(styles.nav)}
            >
                <ul
                    css={css(styles.ul)}
                >
                    {jsxLinks}
                </ul>
            </nav>
        </ScrollContainer>
    )
}

export default HeaderCategoryScrollGrid