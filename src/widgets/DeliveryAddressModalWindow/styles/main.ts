import {getMediaQuery, variables} from "../../../../styles/variables";

export const styles = {
    section: {
        display: "flex",
        flexDirection: "column" as const,
        width: "700px",
        height: "500px",
        borderRadius: variables.radius.md,
        padding: "35px",
        backgroundColor: variables.colors.white,
    },
    h1: {
        textAlign: "left" as const,
        fontSize: variables.fontSize.lg,
        margin: "0"
    },
    span: {
        display: "block",
        textAlign: "left" as const,
        fontSize: variables.fontSize.md,
        color: variables.colors.lightDark
    },
}

// @ts-ignore
styles.section[`${getMediaQuery(variables.mediaBreakPoints.md)}`] = {
    width: "600px"
}

// @ts-ignore
styles.section[`${getMediaQuery(variables.mediaBreakPoints.sm)}`] = {
    width: "90vw",
    padding: "20px"
}

// @ts-ignore
styles.h1[`${getMediaQuery(variables.mediaBreakPoints.sm)}`] = {
    fontSize: variables.fontSize.md
}

// @ts-ignore
styles.span[`${getMediaQuery(variables.mediaBreakPoints.sm)}`] = {
    fontSize: variables.fontSize.sm
}