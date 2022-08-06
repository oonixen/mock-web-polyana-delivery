import {variables} from "../../../../styles/variables";

export const styles = {
    recommendationsContainer: {
        marginTop: 30
    },
    p: {
        fontWeight: "bold",
        marginBottom: 20
    },
    scrollContainer: {
        height: 140,
        whiteSpace: "nowrap" as const
    },
    dishContainer: {
        display: "inline-flex",
        width: 230,
        padding: 15,
        border: `2px solid ${variables.colors.green}`,
        borderRadius: variables.radius.md,
        "&:not(:last-child)": {
            marginRight: 20
        }
    },
    figure: {
        position: "relative" as const,
        width: 100,
        height: 100
    },
    image: {
        borderRadius: variables.radius.md
    },
    infoContainer: {
        width: '100%',
        display: "flex",
        flexDirection: "column" as const,
        justifyContent: "space-between",
        flexShrink: 10000,
        paddingLeft: 10,
    },
    name: {
        whiteSpace: "break-spaces" as const,
        overflowWrap: "anywhere" as const,
        display: "-webkit-box",
        "WebkitLineClamp": "2",
        "WebkitBoxOrient": "vertical" as const,
        overflow: "hidden"
    },
    button: {
        width: '100%',
        borderRadius: variables.radius.md
    }
}