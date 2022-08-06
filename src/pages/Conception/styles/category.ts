import {getMediaQuery, variables} from "../../../../styles/variables";

export const styles = {
    sectionName: {
        margin: "40px 0",
        fontSize: variables.fontSize.lg,
        fontWeight: "bold"
    }
}

//@ts-ignore
styles.sectionName[`${getMediaQuery(variables.mediaBreakPoints.sm)}`] = {
    margin: "30px 0",
}