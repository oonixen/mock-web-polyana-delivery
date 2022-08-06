import {getMediaQuery} from "../../../../styles/variables";
import {variables} from "../../../../styles/variables";

export const styles = {
    ul: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "35px 25px",
    }
}

// @ts-ignore
styles.ul[`${getMediaQuery(variables.mediaBreakPoints.lg)}`] = {
    gridTemplateColumns: "repeat(2, 1fr)",
}

// @ts-ignore
styles.ul[`${getMediaQuery("700px")}`] = {
    gridTemplateColumns: "repeat(1, 1fr)",
}