import {constants} from "../../../../styles/constants";
import {variables} from "../../../../styles/variables";

export const styles = {
    container: {
        width: 'calc(100% - 545px)',
        position: "relative" as const,
        display: "flex",
        alignItems: 'center',
        marginLeft: 30,
        marginRight: constants.pageIndent.horizontal
    },
    linkContainer: {
        overflow: "hidden",
        whiteSpace: "nowrap" as const,
    },
    button: {
        height: 28,
        fontSize: variables.fontSize.sm,
        padding: "5px 12px",
        backgroundColor: variables.colors.white,
        color: variables.colors.black,
        textTransform: "unset" as const,
        "&:hover": {
            backgroundColor: variables.colors.white
        }
    },
    buttonObserver: {
        marginLeft: 10
    },
    figureSvg: {
        width: 17,
    },
    observeContainer: {
        position: "relative" as const
    },
}