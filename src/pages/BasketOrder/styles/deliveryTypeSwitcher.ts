import {getMediaQuery, variables} from "../../../../styles/variables";

export const styles = {
    buttonContainer: {
        display: "flex",
    },
    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 60,
        fontWeight: "bold",
        color: variables.colors.green,
        fontSize: variables.fontSize.md,
        borderBottom: `1px solid ${variables.colors.lightGray}`,
        filter: "grayscale(1)",
        "&:first-of-type": {
            borderRight: `1px solid ${variables.colors.lightGray}`
        }
    },
    buttonChosen: {
        filter: "grayscale(0)",
    },
    figure: {
        height: 25,
        width: 25,
        marginRight: 10
    },
}

//@ts-ignore
styles.figure[`${getMediaQuery("340px")}`] = {
    display: "none"
}