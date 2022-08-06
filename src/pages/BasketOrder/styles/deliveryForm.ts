import {variables} from "../../../../styles/variables";

export const styles = {
    addressInput: {
        "&:hover": {
            cursor: 'pointer'
        },
        "&:disabled": {
            color: variables.colors.black
        }
    },
    inlineContainer: {
        display: "flex"
    },
    containerStyles: {
        "&:not(:last-child)": {
            marginRight: 20
        }
    },
    entrance: {
        width: 100
    },
    flat: {
        width: 100
    },
    floor: {
        width: 70
    }
}