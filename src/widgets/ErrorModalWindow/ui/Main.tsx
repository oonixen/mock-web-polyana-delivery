import {hideInformModalWindow, useInformModalWindowContext} from "../../../processes/Context"
import {Button, Modal} from "@mui/material";
import {styles} from "../styles/main";
import {css} from "@emotion/react";

const ErrorModalWindow = () => {

    const [{isShow, text}, dispatchInformModalWindow] = useInformModalWindowContext()

    return (
        <Modal
            open={isShow}
            onClose={() => hideInformModalWindow(dispatchInformModalWindow)}
            css={css(styles.modalWindow)}
        >
            <div
                css={css(styles.block)}
            >
                <span
                    css={css(styles.span)}
                >
                    {text}
                </span>
                <Button
                    variant={"contained"}
                    css={css(styles.button)}
                    onClick={() => hideInformModalWindow(dispatchInformModalWindow)}
                >
                    <span>
                        Понятно
                    </span>
                </Button>
            </div>
        </Modal>
    )
}

export default ErrorModalWindow