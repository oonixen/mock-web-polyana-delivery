import {variables} from "../../../../styles/variables";

export const styles = {
    h1: {
        marginBottom: 20,
        fontSize: variables.fontSize.md,
        fontWeight: "bold"
    },
    sumText: {
        color: variables.colors.green
    },
    figure: {
        display: "inline-block",
        position: "relative" as const,
        top: 1,
        height: 16,
        width: 16
    },
    bonusText: {
        color: variables.colors.green
    },
}