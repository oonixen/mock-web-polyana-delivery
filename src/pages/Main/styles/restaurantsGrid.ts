import {getMediaQuery, variables} from "../../../../styles/variables";

export const styles = {
    restaurantBlock: {
        "&:hover": {
            cursor: "pointer"
        }
    },
    imageBlock: {
        display: "block",
        position: "relative" as const,
        width: "100%",
        height: "222px",
    },
    additionTextBlock: {
        position: "absolute" as const,
        padding: "5px 10px",
        top: "10px",
        right: "5px",
        borderRadius: variables.radius.xl,
        backgroundColor: "rgba(59, 59, 59, 0.6)",
        fontSize: variables.fontSize.xs,
        color: variables.colors.white
    },
    name: {
        display: "block",
        fontWeight: "bold",
        fontSize: variables.fontSize.lg
    },
    description: {
        display: "block",
        color: variables.colors.lightDark,
        fontSize: variables.fontSize.sm
    }
}

// @ts-ignore
styles.imageBlock[`${getMediaQuery(variables.mediaBreakPoints.sm)}`] = {
    height: "150px",
}