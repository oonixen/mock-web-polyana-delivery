import {variables} from "../../../../styles/variables";

export const styles = {
    container: {
        position: 'relative' as const,
        display: "flex",
        justifyContent: 'center',
        width: 115,
    },
    button: {
        position: "absolute" as const,
        top: 0,
        bottom: 0,
        margin: "auto",
        width: 45,
        height: 35,
        backgroundColor: variables.colors.green,
        color: variables.colors.white,
        borderRadius: variables.radius.xl,
        fontWeight: "bold",
        fontSize: 23,
        "&:hover": {
            backgroundColor: variables.colors.darkGreen
        },
        "&:active": {
            backgroundColor: variables.colors.green
        }
    },
    leftButton: {
        left: "-1px"
    },
    rightButton: {
        right: 0
    },
    buttonText: {
        position: "relative" as const,
        bottom: 2
    },
    textContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 55,
        height: 35,
        backgroundColor: variables.colors.lightestGray
    },
    text: {
        fontSize: variables.fontSize.md,
        color: variables.colors.darkGray,
    }
}