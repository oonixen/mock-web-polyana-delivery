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
        display: "flex",
        flexDirection: "column" as const,
        alignItems: "center"
    },
    h1: {
        textAlign: "center" as const,
        fontSize: variables.fontSize.lg
    },
    figure: {
        position: "relative" as const,
        width: 200,
        height: 230,
        margin: "10px 0"
    }
}