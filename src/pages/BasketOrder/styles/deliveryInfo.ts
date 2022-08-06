import {getMediaQuery, variables} from "../../../../styles/variables";

export const styles =  {
    section: {
        borderRadius: variables.radius.md,
        backgroundColor: variables.colors.lightestGray
    },
    inputsContainer: {
        padding: "25px 30px"
    },
    callbackRadio: {
        userSelect: "none" as const,
        "& .MuiFormControlLabel-label": {
            color: variables.colors.darkGray
        },
        "& .MuiSvgIcon-root": {
            color: variables.colors.green
        }
    }
}