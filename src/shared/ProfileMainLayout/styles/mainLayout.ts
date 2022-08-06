import {getMediaQuery, variables} from "../../../../styles/variables";

export const styles = {
    headerContainer: {
        display: "flex",
        alignItems: "center",
        height: "100%"
    },
    logo: {
        marginRight: "auto"
    },
    navContainer: {
        display: "flex",
        alignItems: "center"
    },
    backButton: {
        marginLeft: 20
    },
    bottomMenuIconContainer: {
        display: "none",
        marginLeft: 15
    },
    headerCommonContentContainer: {},
    headerCommonContentContainerMd: {
        display: "block",
        "& > a": {
            marginBottom: 10,
            width: 100
        }
    },
    mainContainer: {
        marginTop: 40,
        paddingBottom: 40
    }
}

//@ts-ignore
styles.bottomMenuIconContainer[`${getMediaQuery(variables.mediaBreakPoints.md)}`] = {
    display: "flex",
}

//@ts-ignore
styles.headerCommonContentContainer[`${getMediaQuery(variables.mediaBreakPoints.md)}`] = {
    display: "none",
}