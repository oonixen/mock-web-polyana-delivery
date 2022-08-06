import {getMediaQuery, variables} from "../../../../styles/variables";

export const styles = {
    section: {
        width: "100%",
        aspectRatio: "5" as const,
        paddingTop: 32
    },
    swiper: {
        height: "100%",
        borderRadius: variables.radius.md,
        "& .swiper-pagination-bullet-active": {
            backgroundColor: variables.colors.green
        },
        backgroundColor: variables.colors.lightGray
    },
    a: {
        width: "100%",
        "&:hover": {
            cursor: "pointer"
        }
    },
    figure: {
        position: "relative" as const,
        width: "100%",
        height: "100%",
    }
}

// @ts-ignore
styles.section[`${getMediaQuery(variables.mediaBreakPoints.sm)}`] = {
    aspectRatio: "3" as const,
    paddingTop: 20
}