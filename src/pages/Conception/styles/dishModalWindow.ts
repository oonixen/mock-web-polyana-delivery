import {getMediaQuery, variables} from "../../../../styles/variables";

export const styles = {
    innerContainer: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridColumnGap: 21,
        textAlign: "left" as const,
        padding: 23,
    },
    figure: {
        position: "relative" as const,
        width: "100%",
        aspectRatio: "1.3"
    },
    infoContainer: {
        "& > *:not(:last-child)": {
            marginBottom: 15
        }
    },
    image: {
        borderRadius: variables.radius.md
    },
    headerContainer: {
        display: "flex"
    },
    h1: {
        fontSize: variables.fontSize.lg,
        overflowWrap: "anywhere" as const
    },
    svgContainer: {
        position: "relative" as const,
        flexBasis: 30,
        flexShrink: 0,
        paddingLeft: 10,
        height: "fit-content",
        "&:hover": {
            cursor: "help"
        },
        "&:hover > div": {
            display: "block"
        }
    },
    popUpSection: {
        zIndex: 2,
        display: "none",
        position: "absolute" as const,
        top: "100%",
        right: 0,
        width: 250,
        padding: 16,
        borderRadius: variables.radius.sm,
        backgroundColor: variables.colors.darkest,
        color: variables.colors.white,
        "& div": {
            display: "flex",
            justifyContent: "space-between"
        }
    },
    weight: {
        fontSize: variables.fontSize.md,
        fontWeight: "bold",
        color: variables.colors.lightDark
    },
    description: {
        fontSize: variables.fontSize.md,
        color: variables.colors.darkest
    },
    addButton: {
        fontSize: variables.fontSize.sm
    }
}



//@ts-ignore
styles.innerContainer[`${getMediaQuery(variables.mediaBreakPoints.md)}`] = {
    gridTemplateColumns: "repeat(1, 1fr)",
    padding: 16,
}

//@ts-ignore
styles.infoContainer[`${getMediaQuery(variables.mediaBreakPoints.md)}`] = {
    "& > *:not(:last-child)": {
        marginBottom: 10
    }
}

//@ts-ignore
styles.headerContainer[`${getMediaQuery(variables.mediaBreakPoints.md)}`] = {
    marginTop: 10
}