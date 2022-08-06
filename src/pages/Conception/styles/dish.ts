import {getMediaQuery, variables} from "../../../../styles/variables";

const bottomContainer__height = 65

export const styles = {
    dishContainer: {
        position: "relative" as const,
        overflow: "hidden",
        paddingBottom: bottomContainer__height
    },
    tagContainer: {
        position: "absolute" as const,
        left: 10,
        top: 10
    },
    a: {
        position: "relative" as const,
        display: "block",
        width: "100%",
        height: "35vh",
        "&:hover": {
            cursor: "pointer"
        }
    },
    figure: {
        position: "relative" as const,
        width: "100%",
        height: "100%"
    },
    image: {
        borderRadius: variables.radius.md
    },
    name: {
        margin: "10px 0",
        fontSize: variables.fontSize.sm,
        fontWeight: "bold"
    },
    description: {
        color: variables.colors.lightDark,
        display: "-webkit-box",
        "WebkitLineClamp": "3",
        "WebkitBoxOrient": "vertical" as const,
        overflow: "hidden",
    },
    bottomContainer: {
        position: "absolute" as const,
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: bottomContainer__height
    },
    weight: {
        width: "50%",
        color: variables.colors.lightDark,
        fontSize: 13
    },
    button: {
        whiteSpace: "nowrap" as const,
        fontSize: variables.fontSize.sm,
        borderRadius: variables.radius.xs
    }
}


// @ts-ignore
styles.a[`${getMediaQuery(variables.mediaBreakPoints.xl)}`] = {
    height: "25vh",
}

// @ts-ignore
styles.a[`${getMediaQuery(variables.mediaBreakPoints.md)}`] = {
    height: "25vh",
}

// @ts-ignore
styles.a[`${getMediaQuery(variables.mediaBreakPoints.sm)}`] = {
    height: "15vh",
}

// @ts-ignore
styles.tagContainer[`${getMediaQuery(variables.mediaBreakPoints.sm)}`] = {
    top: 5
}

// @ts-ignore
styles.weight[`${getMediaQuery(variables.mediaBreakPoints.sm)}`] = {
    fontSize: 10
}