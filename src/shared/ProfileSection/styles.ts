import {getMediaQuery, variables} from "../../../styles/variables";

export const styles = {
    contentContainer: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: 20
    },
    childrenContainer: {
    },
    profileFormContainer: {
    }
}

//@ts-ignore
styles.profileFormContainer[`${getMediaQuery(variables.mediaBreakPoints.md)}`] = {
    display: "none"
}

//@ts-ignore
styles.childrenContainer[`${getMediaQuery(variables.mediaBreakPoints.sm)}`] = {
    width: "100%"
}