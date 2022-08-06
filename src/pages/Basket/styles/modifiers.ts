import {getMediaQuery, variables} from "../../../../styles/variables";

export const styles = {
    text: {
        fontSize: variables.fontSize.sm,
        color: variables.colors.lightDark,
        "&:not(:last-child)": {
            marginBottom: 5
        }
    }
}

//@ts-ignore
styles.text[`${getMediaQuery(variables.mediaBreakPoints.sm)}`] = {
    fontSize: variables.fontSize.xs
}