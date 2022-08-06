import {variables} from "../../../styles/variables";

export const styles = {
    a: {
        display: "block",
        height: 31.35,
        width: "fit-content",
        padding: "6px 0",
        backgroundColor: variables.colors.lightGreen,
        borderRadius: variables.radius.xs,
        fontSize: variables.fontSize.sm,
        fontWeight: "bold",
        "&:hover": {
            cursor: "pointer",
            opacity: 0.8
        },
        "&:active": {
            opacity: 1
        }
    },
    div: {
        display: "flex",
        alignItems: "center",
        padding: "0 8px",
    },
    iconBlock: {
        width: 18,
        height: 16,
        marginRight: 3
    }
}