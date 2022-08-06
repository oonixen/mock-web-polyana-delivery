import {variables} from "../../../../styles/variables";

export const styles = {
    linkNavContainer: {
        display: "flex",
    },
    link: {
        backgroundColor: variables.colors.white,
        "&:not(:last-child)": {
            marginRight: 10
        },
        fontWeight: 500,
        color: variables.colors.darkGray
    },
    linkActive: {
        fontWeight: "bold",
        color: variables.colors.black
    },
}