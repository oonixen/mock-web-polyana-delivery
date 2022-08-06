import {variables} from "../../../../styles/variables";

export const styles = {
    section: {
        height: "100%",
        display: "flex",
        flexDirection: "column" as const,
        justifyContent: "center",
        textAlign: "center" as const,
        alignItems: "center"
    },
    h1: {
        marginBottom: 20,
        fontSize: variables.fontSize.lg
    },
    description: {
        marginBottom: 20,
        color: variables.colors.lightDark,
        fontSize: variables.fontSize.md
    },
    form: {

    },
    input: {
        display: "block",
        marginBottom: 15,
        border: `1px solid ${variables.colors.darkest}`,
        borderRadius: variables.radius.xs,
        padding: "10px 15px",
        fontSize: variables.fontSize.md
    },
    submit: {
        width: "100%",
        fontSize: variables.fontSize.md,
        marginBottom: 20
    },
    a: {
        textDecoration: "underline",
        color: variables.colors.black
    }
}