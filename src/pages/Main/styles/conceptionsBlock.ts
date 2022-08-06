import {constants} from "../../../../styles/constants";
import {getMediaQuery, variables} from "../../../../styles/variables";

export const styles = {
    main: {
        padding: `25px 0`,
    },
    image: {
        position: "relative" as const,
        width: "300px",
        height: "85px",
        marginBottom: "16px"
    },
    shopsBlock: {
        marginBottom: "20px"
    }
}

// @ts-ignore
styles.main[`${getMediaQuery(variables.mediaBreakPoints.sm)}`] = {
    padding: "0 0 25px"
}

// @ts-ignore
styles.image[`${getMediaQuery(variables.mediaBreakPoints.sm)}`] = {
    width: "200px",
    height: "60px",
}