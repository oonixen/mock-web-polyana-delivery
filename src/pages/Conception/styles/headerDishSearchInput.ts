import {variables} from "../../../../styles/variables";

const heightInput = 30
const widthInput = 140

export const styles = {
    container: {
        width: widthInput,
        height: heightInput,
    },
    autocomplete: {
        width: widthInput,
        height: heightInput,
        position: "absolute" as const,
        top: "-5px",
        bottom: 0,
        margin: "auto 0",
        "& .MuiAutocomplete-inputRoot": {
            height: heightInput,
            padding: "0 10px!important",
            backgroundColor: "white",
        },
        "& .MuiAutocomplete-input": {
            padding: "0!important",
        },
        "& .MuiAutocomplete-popupIndicator": {
            height: heightInput,
            width: 17,
            transform: "rotate(0)!important",
            "&:hover": {
                backgroundColor: "transparent"
            }
        },
        "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
                borderColor: variables.colors.black,
                borderWidth: "1px"
            },
        },
        '.MuiAutocomplete-option': {
            backgroundColor: `${variables.colors.green}!important`,
            color: `${variables.colors.white}!important`,
        },
    },
    option: {
        '&[aria-selected="true"]': {
            backgroundColor: `${variables.colors.green}!important`,
            color: variables.colors.white
        }
    }
}