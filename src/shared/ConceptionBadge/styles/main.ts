import {getMediaQuery, variables} from "../../../../styles/variables";

export const styles = {
    block: {
        position: "absolute" as const,
        bottom: "10px",
        right: "5px",
        display: "flex",
        padding: "3px",
        fontSize: "13px",
        fontWeight: 500
    },
    blockTransparency: {
        borderRadius: variables.radius.xl,
        backgroundColor: "rgba(255, 255, 255, 0.6)",
    },
    badge: {
        display: "flex",
        alignItems: "center",
        textAlign: "center" as const,
        borderRadius: variables.radius.xl,
        backgroundColor: variables.colors.white,
        padding: "5px 5px",
        "&:not(:last-child)": {
            marginRight: "5px"
        }
    },
    svgBlock: {
        display: "inline-flex" as const,
        height: "22px",
        width: "22px",
        marginRight: "5px"
    },
    costlinessBadge: {
        fontSize: variables.fontSize.sm
    },
    costlinessTransparency: {
        opacity: 0.5
    }
}

// @ts-ignore
styles.block[`${getMediaQuery(variables.mediaBreakPoints.sm)}`] = {
    fontSize: "12px"
}