import {variables} from "../../../../styles/variables";
import {constants} from "../../../../styles/constants";

export const styles = {
    container: {
        height: "fit-content",
        width: "fit-content",
        position: "absolute" as const,
        top: constants.header.height,
        bottom: 0,
        left: 0,
        right: 0,
        margin: "auto",
        textAlign: "center" as const
    },
    text: {
        fontWeight: "bold",
        fontSize: variables.fontSize.md,
        marginBottom: 15
    }
}