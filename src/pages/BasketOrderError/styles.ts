import {variables} from "../../../styles/variables";

export const styles = {
    headerContainer: {
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    container: {
        marginTop: 25,
    },
    h1: {
        marginTop: "25vh",
        textAlign: "center" as const,
        fontSize: variables.fontSize.lg
    },
}