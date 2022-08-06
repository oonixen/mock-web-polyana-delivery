import {getMediaQuery, variables} from "../../../../styles/variables";

export const styles = {
    container: {
        marginTop: 15,
    },
    dishContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 5px",
        borderTop: `1px solid ${variables.colors.gray}`,
        "&:last-child": {
            borderBottom: `1px solid ${variables.colors.gray}`,
        }
    },
    figure: {
        position: "relative" as const,
        width: 100,
        height: 100,
    },
    image: {
        borderRadius: variables.radius.md
    },
    infoContainer: {
        flexBasis: 250,
        marginBottom: "auto",
        overflowWrap: "anywhere" as const,
    },
    name: {
        fontSize: variables.fontSize.md
    },
    modifiersContainer: {
        marginTop: 10
    },
    sum: {
        width: 71,
        fontSize: variables.fontSize.md,
        fontWeight: "bold"
    },
    deleteButton: {
        width: 23,
        height: 23,
        padding: 3,
        backgroundColor: variables.colors.gray,
        borderRadius: variables.radius.xl,
        "&:active": {
            backgroundColor: variables.colors.darkGray
        }
    }
}

//@ts-ignore
styles.figure[`${getMediaQuery(variables.mediaBreakPoints.md)}`] = {
    display: "none"
}

//@ts-ignore
styles.deleteButton[`${getMediaQuery(variables.mediaBreakPoints.sm)}`] = {
    display: "none"
}

//@ts-ignore
styles.infoContainer[`${getMediaQuery(variables.mediaBreakPoints.sm)}`] = {
    flexBasis: 150,
}

//@ts-ignore
styles.infoContainer[`${getMediaQuery("385px")}`] = {
    flexBasis: 71,
}

//@ts-ignore
styles.name[`${getMediaQuery(variables.mediaBreakPoints.sm)}`] = {
    fontSize: variables.fontSize.sm
}

//@ts-ignore
styles.sum[`${getMediaQuery(variables.mediaBreakPoints.sm)}`] = {
    width: 57,
    fontSize: variables.fontSize.sm
}