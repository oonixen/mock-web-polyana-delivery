import React from "react";
import {IMainContainer} from "./interfaces";
import {css} from "@emotion/react";
import {stylesPageHeaderIndent} from "../../../styles/modules/stylesPageHeaderIndent";
import {stylesPageHorizontalPadding} from "../../../styles/modules/stylesPageHorizontalPadding";
import {stylesFilledSpaceBetweenTopAndFooter} from "../../../styles/modules/stylesFilledSpaceBetweenTopAndFooter";

const MainContainer: React.FC<IMainContainer> = ({
    children,
    styleContainer= {},
    isStylesPageHeaderIndent = true,
    isStylesPageHorizontalPadding = true,
    isStylesFilledSpaceBetweenTopAndFooter = true
}) => {

    return (
        <main
            css={css(
                isStylesPageHeaderIndent ? stylesPageHeaderIndent.block : {},
                isStylesPageHorizontalPadding ? stylesPageHorizontalPadding.paddingIndent : {},
                isStylesFilledSpaceBetweenTopAndFooter ? stylesFilledSpaceBetweenTopAndFooter.block : {},
                styleContainer
            )}
        >
            {children}
        </main>
    )
}

export default MainContainer