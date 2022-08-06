import {getMediaQuery, variables} from "../../../../styles/variables";

export const styles = {
    p: {
        margin: "20px 0 40px",
        color: variables.colors.dark
    },
    figure: {
        position: "relative" as const,
        width: 470,
        aspectRatio: "2",
    },
    image: {
        borderRadius: variables.radius.md
    }
}

//@ts-ignore
styles.figure[`${getMediaQuery(variables.mediaBreakPoints.md)}`] = {
    width: 400,
}

//@ts-ignore
styles.figure[`${getMediaQuery(variables.mediaBreakPoints.sm)}`] = {
    width: "100%",
}