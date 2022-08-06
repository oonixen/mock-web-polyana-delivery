import {getMediaQuery, variables} from "../../../../styles/variables";

export const styles = {
    container: {
        zIndex: 1,
        height: "fit-content",
        whiteSpace: "nowrap" as const,
    },
    figure: {
        position: "relative" as const,
        display: "inline-block",
        height: 40,
        width: 40,
        "&:not(:last-child)": {
            marginRight: 10
        }
    }
}

// @ts-ignore
styles.figure[`${getMediaQuery(variables.mediaBreakPoints.sm)}`] = {
    height: 25,
    width: 25,
    "&:not(:last-child)": {
        marginRight: 5
    }
}