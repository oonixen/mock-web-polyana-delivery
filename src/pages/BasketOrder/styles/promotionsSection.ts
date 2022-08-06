import {variables} from "../../../../styles/variables";

export const styles = {
    container: {
        width: 300,
        padding: 15,
        backgroundColor: variables.colors.lightestGray,
        borderRadius: variables.radius.md
    },
    p: {
        color: variables.colors.darkGray,
        "&:not(:last-child)": {
            marginBottom: 10
        }
    }
}