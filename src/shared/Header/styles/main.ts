import {getMediaQuery, variables} from "../../../../styles/variables";
import {constants} from "../../../../styles/constants";

export const styles = {
    header: {
        zIndex: 100,
        position: "fixed" as const,
        top: 0,
        left: 0,
        right: 0,
        height: constants.header.height,
        padding: `${constants.header.padding} 0`,
        boxShadow: variables.boxShadow.md,
        backgroundColor: variables.colors.white,
    }
}

// @ts-ignore
styles.header[`${getMediaQuery(variables.mediaBreakPoints.sm)}`] = {
    height: constants.header.heightSm
}