import {getMediaQuery, variables} from "../../../../styles/variables";

export const styles = {
    modalWindow: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    block: {
        width: "500px",
        padding: "25px",
        textAlign: "center" as const,
        backgroundColor: variables.colors.white,
        borderRadius: variables.radius.md
    },
    span: {
        display: "block",
        fontSize: variables.fontSize.md,
        fontWeight: "bold"
    },
    button: {
        marginTop: "15px!important",
        padding: "5px 15px",
        fontSize: variables.fontSize.sm
    }
}

// @ts-ignore
styles.block[`${getMediaQuery(variables.mediaBreakPoints.sm)}`] = {
    width: "300px"
}