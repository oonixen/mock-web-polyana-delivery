import {variables} from "../../../../styles/variables";

const sectionWidth = 250

export const styles = {
    section: {
        zIndex: 100,
        position: "fixed" as const,
        top: 0,
        bottom: 0,
        left: -1 * sectionWidth,
        margin: "auto 0",
        width: sectionWidth,
        height: "fit-content",
        borderTopRightRadius: variables.radius.md,
        borderBottomRightRadius: variables.radius.md,
        backgroundColor: variables.colors.white,
        transition: "left 0.2s ease-in-out",
        boxShadow: variables.boxShadow.md
    },
    sectionOpen: {
        left: 0,
    },
    figure: {
        position: "relative" as const,
        width: "100%",
        aspectRatio: "1.1",
    },
    image: {
        borderTopRightRadius: variables.radius.md,
    },
    informContainer: {
        textAlign: "center" as const,
        padding: 15,
    },
    h1: {
        color: variables.colors.green,
        marginBottom: 10
    },
    button: {
        marginTop: 15,
        padding: "5px 20px",
        borderRadius: variables.radius.sm,
    },
    buttonContainer: {
        top:0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
    },
    switchButton: {
        position: "absolute" as const,
        top: 0,
        left: "calc(100% - 68px)",
        bottom: 0,
        margin: "auto 0",
        transform: "rotate(-90deg)",
        display: "inline-block",
        height: 55,
        width: 190,
        fontSize: 25,
        fontWeight: "bold",
        borderBottomLeftRadius: 9,
        borderBottomRightRadius: 9,
        color: variables.colors.white,
        backgroundColor: variables.colors.green,
        boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.36)",
        "&:before": {
            borderTop: `12px solid ${variables.colors.green}`,
            borderLeft: "90px solid transparent",
            borderRight: "90px solid transparent",
            borderRadius: 10,
            content: '""',
            height: 0,
            left: 5.5,
            position: "absolute" as const,
            bottom: -11.5,
            width: 0,
        },
        "&:hover": {
            boxShadow: "0px 9px 25px rgba(0, 0, 0, 0.36)",
        }
    },
    switchButtonShow: {
        backgroundColor: variables.colors.white,
        color: variables.colors.green,
        "&:before": {
            content: "none",
        }
    }
}