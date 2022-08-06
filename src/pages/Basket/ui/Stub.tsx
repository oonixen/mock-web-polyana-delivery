import {Button} from "@mui/material";
import {useRouter} from "next/router";
import {rootRoute} from "../../../app";
import {css} from "@emotion/react";
import {stylesMuiButtonText} from "../../../../styles/modules/stylesMuiButtonText";
import {styles} from "../styles/stub";

const Stub = () => {

    const router = useRouter()

    return (
        <div
            css={css(styles.container)}
        >
            <p
                css={css(styles.text)}
            >
                Ваша корзина пустая
            </p>
            <Button
                onClick={() => router.push(rootRoute())}
            >
                <span
                    css={css(stylesMuiButtonText.text)}
                >
                    На главную
                </span>
            </Button>
        </div>
    )
}

export default Stub