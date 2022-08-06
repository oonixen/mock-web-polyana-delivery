import {variables} from "../../../../styles/variables";

const padding = 20

export const styles = {
    section: {
        width: 350,
        padding: `${padding}px 0`,
        borderRadius: variables.radius.md,
        backgroundColor: variables.colors.lightestGray,
        border: `1px solid #e3e3e3`
    },
    topBlock: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: `0 ${padding}px ${padding}px`,
        borderBottom: `1px solid ${variables.colors.lightGray}`
    },
    name: {
        marginBottom: 5,
        fontSize: variables.fontSize.md,
        fontWeight: "bold"
    },
    bonusesBlock: {
        display: "flex",
        alignItems: "center",
        color: variables.colors.green,
        fontSize: variables.fontSize.md,
        fontWeight: "bold"
    },
    figureBonus: {
        width: 17,
        height: 20,
        marginRight: 5
    },
    figureAvatar: {
        width: 50,
    }
}