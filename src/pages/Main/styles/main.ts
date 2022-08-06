import {getMediaQuery, variables} from "../../../../styles/variables";

export const styles = {
    header: {
        display: 'flex',
        alignItems: "center"
    },
    logo: {
        marginRight: '30px'
    },
    styleLink: {
        marginLeft: "auto",
        marginRight: 10
    },
    containerSM: {
        marginBottom: 15
    },
    styleLinkSm: {
        "& > div": {
            padding: 0
        }
    },
    styleHeaderText: {},
    styleHeaderTextSm: {
        margin: 0
    },
    styleAddressPanelControl: {},
    styleAddressPanelControlSm: {
        backgroundColor: variables.colors.lightestGreen
    },
    headerBottomMenu: {
        display: 'none',
        marginLeft: 10
    }
}

// @ts-ignore
styles.styleLink[`${getMediaQuery(variables.mediaBreakPoints.md)}`] = {
    display: "none"
}

// @ts-ignore
styles.styleHeaderText[`${getMediaQuery(variables.mediaBreakPoints.md)}`] = {
    display: "none"
}

// @ts-ignore
styles.styleAddressPanelControl[`${getMediaQuery(variables.mediaBreakPoints.md)}`] = {
    display: "none"
}

// @ts-ignore
styles.logo[`${getMediaQuery(variables.mediaBreakPoints.md)}`] = {
    marginRight: 'auto'
}

// @ts-ignore
styles.headerBottomMenu[`${getMediaQuery(variables.mediaBreakPoints.md)}`] = {
    display: 'flex'
}