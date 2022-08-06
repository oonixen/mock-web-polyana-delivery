import {variables} from "../../../styles/variables";

export const styles = {
    block: {
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        width: "fit-content",
        height: "30px",
        fontSize: variables.fontSize.sm,
        backgroundColor: variables.colors.lightGreen,
        borderRadius: variables.radius.xs
    },
    svgBlock: {
        height: "20px",
        width: 20,
        marginLeft: "5px"
    },
    buttonAddress: {
        width: 203
    },
    button: {
        padding: 0,
        color: variables.colors.green,
        fontWeight: "500",
        "&:hover": {
            color: variables.colors.darkGreen
        },
        "&:active": {
            color: variables.colors.green
        }
    },
    buttonBlock: {
        padding: "0 15px",
        margin: "5px 0",
    },
    addressButtonBlock: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderLeft: `1px solid ${variables.colors.green}`
    },
    addressSpan: {
        maxWidth: "152px",
        whiteSpace: "nowrap" as const,
        overflow: "hidden",
        textOverflow: "ellipsis",
    }
}