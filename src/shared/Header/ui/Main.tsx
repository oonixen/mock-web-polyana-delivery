import {styles} from "../styles/main";
import {IHeaderBlock} from "../interfaces/ui";
import React from "react";
import Skeleton from "./Skeleton";
import {css} from "@emotion/react"
import {stylesPageHorizontalPadding} from "../../../../styles/modules/stylesPageHorizontalPadding";

const Header: React.FC<IHeaderBlock> = ({
    children,
    isSkeleton = false,
    cssStyle = {}
}) => {

    const content = isSkeleton ? <Skeleton/> : children

    return (
        <header
            css={css(styles.header, stylesPageHorizontalPadding.paddingIndent, cssStyle)}
        >
            {content}
        </header>
    )
}

export default Header