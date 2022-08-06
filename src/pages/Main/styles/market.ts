import {variablesStyle} from "../variables/style";

export const styles = {
    link: {
        position: "relative" as const,
        display: "block",
        height: variablesStyle.shopImageHeight,
        "&:hover": {
            cursor: "pointer"
        }
    }
}