import {constants} from "../../../../styles/constants";

export const styles = {
    nav: {
        display: "flex",
        alignItems: 'center',
        justifyContent: "space-between",
        height: "100%"
    },
    mainContainer: {
        height: `calc(100vh - ${constants.footer.minHeight})`
    },
    contentContainer: {
        height: "100%"
    }
}