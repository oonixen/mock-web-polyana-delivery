import {getMediaQuery, variables} from "../../../../styles/variables";
import {headerCategoryNavigation__header_height, headerCategoryNavigation__header_heightSm} from "../constants/styles";

export const styles = {
    section: {
        zIndex: 10,
        position: "fixed" as const,
        left: 0,
        right: 0,
        height: headerCategoryNavigation__header_height,
        width: "100%",
        paddingBottom: 5
    },
    containerBigScreen: {
        display: "flex",
        height: "100%"
    },
    containerSmallScreen: {
        display: "none",
        height: "100%",
    },
    logoContainer: {
        position: "relative" as const,
        width: 360,
        height: "100%"
    }
}

// @ts-ignore
styles.containerBigScreen[`${getMediaQuery(variables.mediaBreakPoints.md)}`] = {
    display: "none"
}

// @ts-ignore
styles.containerSmallScreen[`${getMediaQuery(variables.mediaBreakPoints.md)}`] = {
    display: "block",
    height: "100%"
}

// @ts-ignore
styles.section[`${getMediaQuery(variables.mediaBreakPoints.md)}`] = {
    height: headerCategoryNavigation__header_heightSm + 10,
    paddingBottom: 10,
    backgroundColor: variables.colors.white,
    boxShadow: variables.boxShadow.md,
}