import {variables} from "../../../../styles/variables";

export const styles = {
    li: {
        "&:not(:last-child)": {
            marginBottom: "10px"
        }
    },
    button: {
        width: '100%',
        fontSize: `${variables.fontSize.md}!important`,
        fontWeight: "bold!important",
    }
}