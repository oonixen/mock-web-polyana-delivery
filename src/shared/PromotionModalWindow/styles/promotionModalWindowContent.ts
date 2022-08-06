import {getMediaQuery, variables} from "../../../../styles/variables";

export const styles = {
    article: {
        width: 660,
        borderRadius: variables.radius.md,
        backgroundColor: variables.colors.white
    },
    figure: {
        position: "relative" as const,
        aspectRatio: "4"
    },
    image: {
        borderTopRightRadius: variables.radius.md,
        borderTopLeftRadius: variables.radius.md
    },
    infoSection: {
        padding: 16,
        textAlign: "left" as const
    },
    h1: {
        marginBottom: 16,
        fontSize: variables.fontSize.md,
    },
    span: {
        fontSize: variables.fontSize.sm,
        color: variables.colors.lightDark,
        whiteSpace: "pre-wrap" as const
    },
    nav: {
        display: "flex",
        justifyContent: "space-between",
        padding: "16px 16px",
        borderTop: `1px solid ${variables.colors.lightGray}`,
    },
    button: {
        width: 120
    },
    buttonWant: {
        backgroundColor: variables.colors.green
    }
}

// @ts-ignore
styles.article[`${getMediaQuery("700px")}`] = {
    width: "90vw"
}