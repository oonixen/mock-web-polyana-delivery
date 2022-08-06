import {getMediaQuery, variables} from "../../../../styles/variables";

export const styles = {
    section: {
        maxWidth: "600px",
        textAlign: "left" as const,
        padding: "20px 30px",
        borderRadius: variables.radius.sm,
        backgroundColor: variables.colors.white,
    },
    h1: {
        fontSize: variables.fontSize.md,
        color: variables.colors.lightDark,
        marginBottom: 20
    },
    address: {
        fontSize: variables.fontSize.md,
        fontWeight: "bold",
        marginBottom: 20
    },
    dishesBlock: {
        height: 300,
        overflow: "auto" as const,
        marginBottom: 10
    },
    dishBlock: {
        display: "flex",
        padding: "10px 0",
        "&:not(:last-child)": {
            borderBottom: `1px solid ${variables.colors.lightGreen}`
        }
    },
    figure: {
        position: "relative" as const,
        width: 70,
        height: 70
    },
    image: {
        borderRadius: variables.radius.sm
    },
    productInfoContainer: {
        flexGrow: 1,
        flexShrink: 25,
        display: "flex",
        flexDirection: "column" as const,
        justifyContent: "space-between",
        marginLeft: 30,
        marginRight: 20
    },
    dishName: {
        fontSize: variables.fontSize.md,
        marginBottom: 15
    },
    priceAndCountContainer: {
        display: "flex",
        justifyContent: "space-between"
    },
    dishPrice: {
        fontSize: variables.fontSize.md,
        fontWeight: "bold",
    },
    dishCount: {
        fontSize: variables.fontSize.md,
        color: variables.colors.lightDark
    },
    countAndSum: {
        textAlign: "center" as const,
        fontSize: variables.fontSize.md,
        fontWeight: "bold",
    },
    sum: {
        color: variables.colors.green
    }
}

//@ts-ignore
styles.productInfoContainer[`${getMediaQuery(variables.mediaBreakPoints.sm)}`] = {
    marginLeft: 20,
    marginRight: 0
}

//@ts-ignore
styles.section[`${getMediaQuery(variables.mediaBreakPoints.sm)}`] = {
    maxWidth: "90vw"
}