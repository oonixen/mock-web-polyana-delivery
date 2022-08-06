import {variables} from "../../../../styles/variables";

export const styles = {
    article: {
        position: "relative" as const,
        boxShadow: "rgba(6,5,50,.15) 0 2px 19px !important",
        borderRadius: variables.radius.md,
    },
    figure: {
        position: "relative" as const,
        height: 97,
        width: "100%",
    },
    image: {
        borderTopLeftRadius: variables.radius.md,
        borderTopRightRadius: variables.radius.md,
    },
    infoContainer: {
        padding: `16px 16px calc(16px + 35px)`,
    },
    h1: {
        marginBottom: 16,
        fontSize: variables.fontSize.md,
    },
    description: {
        margin: "16px 0",
        fontSize: variables.fontSize.sm,
        color: variables.colors.lightDark,
        display: "-webkit-box",
        "WebkitLineClamp": "3",
        "WebkitBoxOrient": "vertical" as const,
        overflow: "hidden"
    },
    buttonContainer: {
        position: "absolute" as const,
        bottom: 16,
        height: 35,
        width: "calc(100% - 16px - 16px)",
        display: "flex",
        justifyContent: "space-between"
    },
    button: {
        width: 120,
        height: 35
    }
}