import {getMediaQuery, variables} from "../../../../styles/variables";

export const styles = {
    container: {
        marginTop: 20,
        marginBottom: 100
    },
    sumAndButtonContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 15,
        fontWeight: "bold",
        fontSize: variables.fontSize.md
    },
    sum: {
        color: variables.colors.green
    },
    button: {
        backgroundColor: variables.colors.lightGreen,
        padding: 10,
        borderRadius: variables.radius.xl,
        fontSize: variables.fontSize.xs,
        color: variables.colors.green,
        "&:active": {
            color: variables.colors.darkGreen
        }
    },
    additionInfoContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 30
    },
    title: {
        fontWeight: "bold"
    },
    input: {
        padding: "7px 15px",
        borderRadius: variables.radius.md,
        border: `1px solid ${variables.colors.green}`,
        fontWeight: "bold"
    },
    createOrderA: {
        display: "block",
        position: "sticky" as const,
        bottom: 25,
        left: 0,
        right: 0,
        width: "fit-content",
        textAlign: "center" as const,
        margin: "32px auto",
    },
    createOrderButton: {
        borderRadius: variables.radius.xl,
        padding: "7px 15px",
        filter: "drop-shadow(0px 1.54691px 10.8284px rgba(0, 0, 0, 0.25))",
        fontSize: variables.fontSize.sm,
        "&:hover": {
            backgroundColor: variables.colors.white
        }
    }
}

//@ts-ignore
styles.input[`${getMediaQuery(variables.mediaBreakPoints.sm)}`] = {
    width: 185
}

//@ts-ignore
styles.title[`${getMediaQuery(variables.mediaBreakPoints.sm)}`] = {
    flexShrink: 100
}
