import {constants} from "../constants";
import {getMediaQuery, variables} from "../variables";

export const stylesPageHeaderIndent = {
    block: {
        paddingTop: constants.header.height
    }
}

// @ts-ignore
stylesPageHeaderIndent.block[`${getMediaQuery(variables.mediaBreakPoints.sm)}`] = {
    paddingTop: constants.header.heightSm
}