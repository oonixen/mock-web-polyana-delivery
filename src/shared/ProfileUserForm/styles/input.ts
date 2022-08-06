import {variables} from "../../../../styles/variables";

export const styles = {
    block: {
      "&:not(:last-child)": {
          marginBottom: 15
      }
    },
    titleBlock: {
        marginBottom: 6,
        marginLeft: 3,
        color: variables.colors.darkGray
    },
    subtitle: {
        fontSize: variables.fontSize.xs,
    },
    input: {
        width: "100%",
        padding: 8,

        borderRadius: variables.radius.sm,
        backgroundColor: variables.colors.white,
    }
}