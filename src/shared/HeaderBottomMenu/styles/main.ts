import {getMediaQuery, variables} from "../../../../styles/variables";
import {constants} from "../../../../styles/constants";

export const styles = {
    block: {
        display: "flex",
        justifyContent: "center",
        width: 30,
        height: 30
    },
    modalBlock: {
        position: "absolute" as const,
        left: 0,
        right: 0,
        top: constants.header.height,
        width: "100%",
        height: `calc(100vh - ${constants.header.height})`,
        padding: `25px ${constants.pageIndent.horizontal}`,
        backgroundColor: variables.colors.lightGreen
    }
}

// @ts-ignore
styles.modalBlock[`${getMediaQuery(variables.mediaBreakPoints.sm)}`] = {
    top: constants.header.heightSm,
    height: `calc(100vh - ${constants.header.heightSm})`,
    padding: `25px ${constants.pageIndent.horizontalSm}`,
}