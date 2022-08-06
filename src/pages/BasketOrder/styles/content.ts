import {getMediaQuery, variables} from "../../../../styles/variables";

const containerToColumnBreakPoint = "760px"

export const styles = {
    form: {
        marginTop: 30,
        marginBottom: 50
    },
    contentContainer: {
        display: "flex",
        justifyContent: "space-between"
    },
    leftContainer: {
        width: 600
    },
    rightContainer: {
    }
}

//@ts-ignore
styles.contentContainer[`${getMediaQuery(containerToColumnBreakPoint)}`] = {
    flexDirection: "column",
}

//@ts-ignore
styles.leftContainer[`${getMediaQuery("970px")}`] = {
    width: 540,
}

//@ts-ignore
styles.leftContainer[`${getMediaQuery("900px")}`] = {
    width: 450,
}

//@ts-ignore
styles.leftContainer[`${getMediaQuery("810px")}`] = {
    width: 400,
}

//@ts-ignore
styles.leftContainer[`${getMediaQuery(containerToColumnBreakPoint)}`] = {
    width: "100%",
}

//@ts-ignore
styles.rightContainer[`${getMediaQuery(containerToColumnBreakPoint)}`] = {
    marginTop: 20
}