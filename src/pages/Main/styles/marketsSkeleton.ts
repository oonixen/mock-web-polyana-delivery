import {variablesStyle} from "../variables/style";

export const styles = {
    skeletonBlock: {
        whiteSpace: "nowrap" as const,
        overflow: "hidden"
    },
    skeleton: {
        display: "inline-block",
        width: "320px",
        height: variablesStyle.shopImageHeight,
        "&:not(:last-child)": {
            marginRight: "16px"
        }
    }
}