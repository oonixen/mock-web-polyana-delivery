import {getMediaQuery, variables} from "../../../../styles/variables";

export const styles = {
    section: {
        zIndex: 10,
        position: "fixed" as const,
        bottom: 25,
        right: 25,
        width: 270,
        height: 100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        borderRadius: variables.radius.md,
        backgroundColor: variables.colors.black
    },
    figure: {
        width: 60,
        height: 60
    },
    infoContainer: {
        width: 167
    },
    text: {
        display: "-webkit-box",
        "WebkitLineClamp": "1",
        "WebkitBoxOrient": "vertical" as const,
        overflow: "hidden",
    },
    name: {
        color: variables.colors.gray,
    },
    status: {
        fontWeight: "bold",
        color: variables.colors.green
    }
}

//@ts-ignore
styles.section[`${getMediaQuery(variables.mediaBreakPoints.sm)}`] = {
    width: 200,
    height: 70,
    padding: 10,
}

//@ts-ignore
styles.figure[`${getMediaQuery(variables.mediaBreakPoints.sm)}`] = {
    width: 40,
    height: 40,
}

//@ts-ignore
styles.text[`${getMediaQuery(variables.mediaBreakPoints.sm)}`] = {
    fontSize: 13
}

//@ts-ignore
styles.infoContainer[`${getMediaQuery(variables.mediaBreakPoints.sm)}`] = {
    width: 130
}