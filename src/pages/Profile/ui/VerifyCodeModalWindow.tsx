import React, {useState} from "react";
import {IVerifyCodeModalWindow} from "../interfaces/ui";
import ModalWindow from "../../../shared/ModalWindow";
import {LoadingButton} from "@mui/lab";
import {css} from "@emotion/react";
import {stylesMuiButtonText} from "../../../../styles/modules/stylesMuiButtonText";
import {styles} from "../styles/verifyCodeModalWindow";
import {verifyCode} from "../api/verifyCode";
import {useUserContext} from "../../../processes/Context";
import {useRouter} from "next/router";

const VerifyCodeModalWindow: React.FC<IVerifyCodeModalWindow> = ({
    isShow,
    dispatchInformModalWindow,
    phone,
    setIsShowVerifyCodeModalWindow
}) => {

    const router = useRouter()
    const [code, setCode] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [, dispatchUser] = useUserContext()

    return (
        <ModalWindow
            isShow={isShow}
            onClickHide={() => setIsShowVerifyCodeModalWindow(false)}
        >
            <section
                css={css(styles.section)}
            >
                <p
                    css={css(styles.p)}
                >
                    Мы выслали вам код для входа по СМС
                </p>
                <form
                    onSubmit={event => {
                        event.preventDefault()
                        verifyCode(phone, code, setIsLoading, dispatchInformModalWindow, dispatchUser, router)
                    }}
                >
                    <input
                        css={css(styles.input)}
                        type={"text"}
                        placeholder={"Код"}
                        value={code}
                        onChange={event => setCode(event.currentTarget.value)}
                        disabled={isLoading}
                    />
                    <LoadingButton
                        css={css(styles.button)}
                        type={"submit"}
                        loading={isLoading}
                    >
                        <span
                            css={css(stylesMuiButtonText.text)}
                        >
                            Подтвердить
                        </span>
                    </LoadingButton>
                </form>
            </section>
        </ModalWindow>
    )
}

export default VerifyCodeModalWindow