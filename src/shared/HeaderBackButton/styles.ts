import {variables} from "../../../styles/variables";

export const styles = {
    button: {
        height: 35,
        width: 100,
        padding: "0 15px",
        borderRadius: variables.radius.lg,
        backgroundColor: variables.colors.lightGreen
    },
    svgBlock: {
        height: 17,
        fontSize: "0!important"
    },
    span: {
        fontSize: variables.fontSize.sm,
        fontWeight: "bold",
        color: variables.colors.black,
        textTransform: "none" as const
    }
}