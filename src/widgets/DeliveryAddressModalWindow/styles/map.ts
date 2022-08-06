import {variables} from "../../../../styles/variables";

export const styles = {
    block: {
        overflow: "hidden",
        position: "relative" as const,
        flexGrow: "1",
        width: "100%",
        height: "max-content",
        borderRadius: variables.radius.sm,
        backgroundColor: variables.colors.lightGray
    },
    map: {
        width: "100%",
        height: "100%"
    },
    button: {
        zIndex: 1000,
        position: "absolute" as const,
        bottom: "13px",
        left: 0,
        right: 0,
        margin: "0 auto",
        width: "fit-content",
        backgroundColor: variables.colors.black,
        padding: "7px 20px",
        borderRadius: variables.radius.sm,
        "&:hover": {
            backgroundColor: variables.colors.darkest
        }
    }
}