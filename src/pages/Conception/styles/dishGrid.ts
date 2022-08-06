import {getMediaQuery, variables} from "../../../../styles/variables";

export const styles = {
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        columnGap: 32,
        rowGap: 40
    }
}

// @ts-ignore
styles.grid[`${getMediaQuery(variables.mediaBreakPoints.md)}`] = {
    gridTemplateColumns: "repeat(2, 1fr)",
}