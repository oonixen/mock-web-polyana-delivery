import {variables} from "../../../../styles/variables";

export const styles = {
    section: {
        padding: "20px",
        backgroundColor: variables.colors.white,
        borderRadius: variables.radius.sm
    },
    list: {
        display: "flex",
        flexDirection: "column" as const
    }
}