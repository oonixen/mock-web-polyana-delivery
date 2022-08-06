import {variables} from "../../../../styles/variables";

export const styles = {
    container: {
        width: 300,
        padding: 15,
        marginBottom: 15,
        textAlign: "center" as const,
        borderRadius: variables.radius.md,
        backgroundColor: variables.colors.lightGreen
    },
    mainText: {
        fontSize: variables.fontSize.md,
        fontWeight: "bold"
    },
    descriptionText: {
        marginTop: 5,
        fontSize: 13,
        color: variables.colors.dark
    },
    chosenBonuses: {
        marginTop: 10,
        marginBottom: 10,
        fontWeight: "bold",
        fontSize: variables.fontSize.lg,
        color: variables.colors.green
    },
    sliderContainer: {
        padding: "0 10px"
    },
    figure: {
        display: "inline-block",
        position: "relative" as const,
        top: 2,
        height: 16,
        width: 16
    },
    bottomText: {
        marginTop: 5,
        fontWeight: "bold"
    },
    button: {
        marginTop: 15,
        borderRadius: variables.radius.md,
        padding: "5px 30px",
        fontWeight: "bold",
        textTransform: "none" as const
    }
}