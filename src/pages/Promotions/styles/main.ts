import {getMediaQuery} from "../../../../styles/variables";

export const styles = {
    headerBlock: {
        display: "flex",
        alignItems: 'center',
        height: "100%"
    },
    logo: {
        marginRight: "auto"
    },
    promotionsContainer: {
        padding: "64px 0",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        columnGap: 32,
        rowGap: 40
    }
}

// @ts-ignore
styles.promotionsContainer[`${getMediaQuery("970px")}`] = {
    gridTemplateColumns: "repeat(2, 1fr)",
}

// @ts-ignore
styles.promotionsContainer[`${getMediaQuery("660px")}`] = {
    padding: "40px 0",
    gridTemplateColumns: "repeat(1, 1fr)",
    rowGap: 32
}