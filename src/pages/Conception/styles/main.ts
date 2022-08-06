import {getMediaQuery, variables} from "../../../../styles/variables";
import {headerCategoryNavigation__header_height, headerCategoryNavigation__header_heightSm} from "../constants/styles";

export const styles = {
    header: {
        display: "flex",
        alignItems: "center"
    },
    logo: {
        marginRight: 30
    },
    addressPanel: {
        marginRight: 10
    },
    addressPanelSm: {
        backgroundColor: variables.colors.lightestGreen,
        marginBottom: 10
    },
    headerText: {
        marginRight: "auto"
    },
    headerTextSm: {
        marginBottom: 10
    },
    promotions: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        "& > div": {
            borderRight: `1px solid ${variables.colors.green}`
        }
    },
    promotionsSm: {
        marginBottom: 10,
        "& > div": {
            padding: 0
        }
    },
    basket: {
        borderRadius: 0,
        "& > div": {
            borderRight: `1px solid ${variables.colors.green}`
        }
    },
    account: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        marginRight: 10
    },
    accountSm: {
        "& > div": {
            padding: 0
        }
    },
    headerBottomMenuContainer: {
        display: "none",
        marginLeft: 10
    },
    mainContainerIndent: {
        marginTop: headerCategoryNavigation__header_height,
        marginBottom: 60
    }
}

// @ts-ignore
styles.header[`${getMediaQuery(variables.mediaBreakPoints.md)}`] = {
    boxShadow: "none"
}

// @ts-ignore
styles.addressPanel[`${getMediaQuery(variables.mediaBreakPoints.md)}`] = {
    display: "none"
}

// @ts-ignore
styles.headerText[`${getMediaQuery("1000px")}`] = {
    visibility: "hidden",
    width: 0
}

// @ts-ignore
styles.promotions[`${getMediaQuery(variables.mediaBreakPoints.md)}`] = {
    display: "none"
}

// @ts-ignore
styles.basket[`${getMediaQuery(variables.mediaBreakPoints.md)}`] = {
    marginRight: 10,
    borderRadius: variables.radius.xs,
    "& > div": {
        borderRight: `none`
    }
}

// @ts-ignore
styles.basket[`${getMediaQuery("330px")}`] = {
    fontSize: "13px"
}

// @ts-ignore
styles.account[`${getMediaQuery(variables.mediaBreakPoints.md)}`] = {
    display: "none"
}

// @ts-ignore
styles.headerBottomMenuContainer[`${getMediaQuery(variables.mediaBreakPoints.md)}`] = {
    display: "flex"
}

// @ts-ignore
styles.mainContainerIndent[`${getMediaQuery(variables.mediaBreakPoints.md)}`] = {
    marginTop: headerCategoryNavigation__header_heightSm
}