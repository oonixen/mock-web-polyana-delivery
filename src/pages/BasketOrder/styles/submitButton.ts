import {variables} from "../../../../styles/variables";

export const styles = {
    orderButtonContainer: {
        position: "sticky" as const,
        bottom: 30,
        left:0,
        right: 0,
        width: "fit-content",
        margin: "30px auto",
        textAlign: "center" as const
    },
    orderButton: {
        borderRadius: variables.radius.xl,
        padding: "7px 15px",
        filter: "drop-shadow(0px 1.54691px 10.8284px rgba(0, 0, 0, 0.25))",
        fontSize: variables.fontSize.sm,
        "&:hover": {
            backgroundColor: variables.colors.white
        }
    }
}
