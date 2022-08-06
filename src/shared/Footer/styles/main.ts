import {constants} from "../../../../styles/constants";
import {getMediaQuery, variables} from "../../../../styles/variables";

export const styles = {
    footer:{
        minHeight: constants.footer.minHeight,
        display: "flex",
        justifyContent: "space-between",
        padding: `16px 0 ${constants.pageIndent.horizontal} 0`,
        borderTop: `1px solid ${variables.colors.lightGray}`,
    },
    textBlock: {
        marginRight: "16px",
        color: variables.colors.gray
    },
    imageBlock: {
        display: "flex",
        alignItems: "center",
        height: 40,
    },
    a: {
        display: "block",
        position:'relative' as const,
        filter: "grayscale(1)",
        "&: hover": {
            filter: "grayscale(0)"
        },
        "&:not(:last-child)": {
            marginRight: '20px'
        }
    },
    littleIcon: {
        width: 40,
        height: 40,
    },
    bigIcon: {
        width: 120,
        height: 40,
    }
}

// @ts-ignore
styles.textBlock[`${getMediaQuery(variables.mediaBreakPoints.md)}`] = {
    fontSize: variables.fontSize.xs
}

// @ts-ignore
styles.bigIcon[`${getMediaQuery(variables.mediaBreakPoints.sm)}`] = {
    width: 64,
    height: 30,
}

// @ts-ignore
styles.littleIcon[`${getMediaQuery(variables.mediaBreakPoints.sm)}`] = {
    width: 30,
    height: 30,
}

// @ts-ignore
styles.a[`${getMediaQuery(variables.mediaBreakPoints.sm)}`] = {
    "&:not(:last-child)": {
        marginRight: 10
    }
}