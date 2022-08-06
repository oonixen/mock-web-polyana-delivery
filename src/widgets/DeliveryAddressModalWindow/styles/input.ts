import {getMediaQuery, variables} from "../../../../styles/variables";

const inputHeight = "46px"

export const styles = {
    block: {
        display: "flex",
        padding: "25px 0",
    },
    inputContainer: {
        width: "100%",
        marginRight: "13px",
        "& .MuiAutocomplete-inputRoot": {
            height: inputHeight,
            borderRadius: variables.radius.sm,
        },
        "& .MuiAutocomplete-input": {
            padding: "0 10px!important",
            fontSize: `${variables.fontSize.md}!important`,
            "@media (max-width: 600px)": {
                fontSize: `${variables.fontSize.sm}!important`
            }
        },
        '.MuiAutocomplete-option': {
            backgroundColor: `${variables.colors.green}!important`,
            color: `${variables.colors.white}!important`,
        },
        "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
                borderColor: variables.colors.black,
                borderWidth: "1px"
            },
        }
    },
    button: {
        width: "120px",
        height: inputHeight,
        fontWeight: "bold",
        fontSize: `${variables.fontSize.sm}!important`
    },
    option: {
        '&[aria-selected="true"]': {
            backgroundColor: `${variables.colors.green}!important`,
            color: variables.colors.white
        }
    }
}

//@ts-ignore
styles.block[`${getMediaQuery(variables.mediaBreakPoints.sm)}`] = {
    flexDirection: "column"
}

//@ts-ignore
styles.button[`${getMediaQuery(variables.mediaBreakPoints.sm)}`] = {
    marginTop: "13px!important",
    width: "100%",
    height: "35px"
}