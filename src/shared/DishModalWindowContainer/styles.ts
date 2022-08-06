import {getMediaQuery, variables} from "../../../styles/variables";

export const styles = {
    container: {
        position: "relative" as const,
        width: "50vw",
        borderRadius: variables.radius.lg,
        backgroundColor: variables.colors.white,
        // overflow: "clip"
    },
    bottomContainer: {
        position: "sticky" as const,
        bottom: "-50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: 75,
        width: "100%",
        padding: `0 23px`,
        backgroundColor: variables.colors.white,
        borderTop: `1px solid ${variables.colors.lightGray}`,
        borderBottomLeftRadius: variables.radius.lg,
        borderBottomRightRadius: variables.radius.lg
    },
    price: {
        fontSize: variables.fontSize.md,
        fontWeight: "bold"
    },
    addButton: {
        padding: "8px 16px"
    }
}

//@ts-ignore
styles.container[`${getMediaQuery(variables.mediaBreakPoints.md)}`] = {
    width: "50vw",
}

//@ts-ignore
styles.container[`${getMediaQuery(variables.mediaBreakPoints.sm)}`] = {
    width: "90vw",
}