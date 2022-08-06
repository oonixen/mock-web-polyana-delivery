import {headerCategoryNavigation__header_heightSm} from "../constants/styles";

export const styles = {
    nav: {
        marginTop: 25,
        height: headerCategoryNavigation__header_heightSm,
    },
    scrollContainer: {
        position: "absolute" as const,
        left: 0,
        right: 0,
    },
    ul: {
        whiteSpace: "nowrap" as const,
    }
}