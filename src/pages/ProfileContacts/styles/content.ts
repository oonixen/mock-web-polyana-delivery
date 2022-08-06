import {getMediaQuery, variables} from "../../../../styles/variables";

const svgRightPosition = "calc(100% + 10px)"

export const styles = {
    h1Block: {
        position: "relative" as const,
    },
    fist: {
        position: "absolute" as const,
        width: 30,
        right: svgRightPosition,
        top: 10
    },
    a: {
        display: "block",
        marginTop: 5,
        color: variables.colors.green,
        textDecoration: "underline"
    },
    h2: {
        marginTop: 40,
        marginBottom: 10
    },
    form: {
        position: "relative" as const,
    },
    smile: {
        position: "absolute" as const,
        width: 70,
        right: svgRightPosition,
        top: 0
    },
    textArea: {
        width: "100%",
        padding: 10,
        borderRadius: variables.radius.sm,
        border: `1px solid ${variables.colors.lightGray}`,
        color: variables.colors.darkGray
    },
    submitButton: {
        display: "block",
        marginTop: 10,
        backgroundColor: variables.colors.lightGreen,
        color: variables.colors.green
    },
    workA: {
        marginTop: 40,
        display: "flex",
        backgroundColor: variables.colors.lightGreen,
        borderRadius: variables.radius.md,
        border: `1px solid #C5CEB4`
    },
    figure: {
        width: 200,
        aspectRatio: "1",
        position: "relative" as const
    },
    image: {
        borderBottomLeftRadius: variables.radius.md,
        borderTopLeftRadius: variables.radius.md
    },
    blockText: {
        display: "flex",
        flexDirection: "column" as const,
        justifyContent: "space-between",
        padding: 15
    },
    topText: {
        color: variables.colors.black,
        fontSize: variables.fontSize.md,
        fontWeight: "bold"
    },
    bottomText: {
        color: variables.colors.green
    }
}

//@ts-ignore
styles.fist[`${getMediaQuery(variables.mediaBreakPoints.lg)}`] = {
    display: "none"
}

//@ts-ignore
styles.smile[`${getMediaQuery(variables.mediaBreakPoints.lg)}`] = {
    display: "none"
}