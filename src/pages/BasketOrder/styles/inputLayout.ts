import {variables} from "../../../../styles/variables";

export const styles = {
    label: {
        display: "block",
        marginBottom: 20,
        "& > input,textarea,select": {
            width: "100%",
            padding: 10,
            border: "none",
            borderRadius: variables.radius.sm,
            backgroundColor: variables.colors.white
        }
    },
    p: {
        marginBottom: 5,
        color: variables.colors.darkGray
    }
}