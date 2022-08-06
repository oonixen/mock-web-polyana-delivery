import {variables} from "../../../../styles/variables";

export const styles = {
    nav: {
        position: "absolute" as const,
        top: 30,
        right: 0,
        width: 200,
        padding: 10,
        backgroundColor: variables.colors.white,
        borderRadius: variables.radius.xs,
        boxShadow: variables.boxShadow.md,
    },
    li: {
        padding: 5,
        textAlign: "center" as const,
        "&:not(:last-child)": {
            marginBottom: 5
        },
    },
    a: {
        display: "block",
        "&:hover": {
            cursor: "pointer",
            color: variables.colors.green
        }
    }
}