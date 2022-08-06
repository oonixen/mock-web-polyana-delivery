import {CircularProgress} from "@mui/material";
import {css} from "@emotion/react";
import {styles} from "./styles";

const Main = () => {
    return (
        <CircularProgress
            css={css(styles.loader)}
        />
    )
}

export default Main