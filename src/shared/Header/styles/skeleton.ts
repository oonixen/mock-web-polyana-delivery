import {getMediaQuery, variables} from "../../../../styles/variables";

export const styles = {
    container: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        height: "100%"
    },
    div: {
        display: "flex",
        alignItems: 'center'
    },
    skeleton1: {
        height: "50px",
        width: "120px",
        marginRight: "40px"
    },
    skeleton2: {
        height: "40px",
        width: "200px"
    },
    skeleton3 : {
        height: "40px",
        width: "100px",
        marginRight: "20px"
    },
    skeleton4: {
        height: "40px",
        width: "40px",
    },
}

//@ts-ignore
styles.skeleton1[`${getMediaQuery(variables.mediaBreakPoints.md)}`] = {
    width: "80px",
    height: "40px",
}


//@ts-ignore
styles.skeleton2[`${getMediaQuery(variables.mediaBreakPoints.md)}`] = {
    display: "none"
}
