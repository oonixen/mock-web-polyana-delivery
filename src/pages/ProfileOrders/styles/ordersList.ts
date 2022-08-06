import {getMediaQuery, variables} from "../../../../styles/variables";

const border = `1px solid ${variables.colors.gray}`

export const styles = {
    container: {
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 0",
        borderTop: border,
        "&:last-child": {
            borderBottom: border,
        }
    },
    infoContainer: {
        width: 230,
        marginRight: 50,
        "& > p:not(:last-child)": {
            marginBottom: 10
        }
    },
    activeName: {
        color: variables.colors.green
    },
    status: {
        fontWeight: "bold"
    },
    date: {
        fontWeight: "bold"
    },
    address: {
        fontStyle: "italic"
    },
    navContainer: {
        display: "flex",
        flexDirection: "column" as const,
        justifyContent: "space-between",
        alignItems: "end"
    },
    sum: {
        color: variables.colors.lightDark
    },
    a: {
        padding: "5px 10px",
        borderRadius: variables.radius.sm,
        backgroundColor: variables.colors.lightGreen,
        color: variables.colors.green,
        "&:hover": {
            color: variables.colors.darkGreen,
            cursor: "pointer"
        },
        "&:active": {
            color: variables.colors.green,
        }
    }
}

//@ts-ignore
styles.infoContainer[`${getMediaQuery(variables.mediaBreakPoints.sm)}`] = {
    width: 'auto',
    marginRight: 15,
}