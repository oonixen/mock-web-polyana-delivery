import {constants} from "../constants";
import {getMediaQuery} from "../variables";
import {variables} from "../variables";

export const stylesPageHorizontalPadding = {
    paddingIndent: {
        paddingRight: constants.pageIndent.horizontal,
        paddingLeft: constants.pageIndent.horizontal
    },
    marginIndent: {
        marginRight: constants.pageIndent.horizontal,
        marginLeft: constants.pageIndent.horizontal
    }
}

// @ts-ignore
stylesPageHorizontalPadding.paddingIndent[`${getMediaQuery(variables.mediaBreakPoints.sm)}`] = {
    paddingRight: constants.pageIndent.horizontalSm,
    paddingLeft: constants.pageIndent.horizontalSm
}

// @ts-ignore
stylesPageHorizontalPadding.marginIndent[`${getMediaQuery(variables.mediaBreakPoints.sm)}`] = {
    marginRight: constants.pageIndent.horizontalSm,
    marginLeft: constants.pageIndent.horizontalSm
}