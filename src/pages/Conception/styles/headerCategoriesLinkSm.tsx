import {constants} from "../../../../styles/constants";
import {headerCategoryNavigation__header_heightSm} from "../constants/styles";
import {getMediaQuery, variables} from "../../../../styles/variables";

export const styles = {
    li: {
        display: "inline-block",
        "&:not(:last-child)": {
            marginRight: 10
        },
        "&:first-of-type": {
            marginLeft: constants.pageIndent.horizontal
        },
        "&:last-of-type": {
            marginRight: constants.pageIndent.horizontal
        }
    },
    button: {
        height: headerCategoryNavigation__header_heightSm
    }
}

// @ts-ignore
styles.li[`${getMediaQuery(variables.mediaBreakPoints.sm)}`] = {
    "&:first-of-type": {
        marginLeft: constants.pageIndent.horizontalSm
    },
    "&:last-of-type": {
        marginRight: constants.pageIndent.horizontalSm
    }
}