import {getMediaQuery, variables} from "../../../../styles/variables";

export const styles = {
    section: {
        display: "flex",
        flexDirection: "column" as const,
        alignItems: "center",
        textAlign: "center" as const,
        padding: 20,
        backgroundColor: variables.colors.white,
        borderRadius: variables.radius.sm
    },
    p: {
        fontSize: variables.fontSize.md,
        marginBottom: 20
    },
    input: {
        width: 200,
        display: "block",
        marginBottom: 15,
        border: `1px solid ${variables.colors.lightDark}`,
        borderRadius: variables.radius.xs,
        padding: "10px 15px",
        fontSize: variables.fontSize.md,
    },
    button: {
        width: "100%",
        fontSize: variables.fontSize.sm
    }
}

//@ts-ignore
styles.section[`${getMediaQuery(variables.mediaBreakPoints.sm)}`] = {
    maxWidth: "90vw"
}