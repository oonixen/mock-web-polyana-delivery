import {styles} from "../styles/authorizeForm";
import {css} from "@emotion/react";
import {stylesMuiButtonText} from "../../../../styles/modules/stylesMuiButtonText";
import InputMask from "react-input-mask"
import {clearPhoneMask, getPhoneMask} from "../../../features/Phone";
import {useState} from "react";
import {LoadingButton} from "@mui/lab";
import {useInformModalWindowContext} from "../../../processes/Context";
import {authorizeUser} from "../model/functions";
import VerifyCodeModalWindow from "./VerifyCodeModalWindow";

const AuthorizeForm = () => {

    const [phone, setPhone] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [{}, dispatchInformModalWindow] = useInformModalWindowContext()
    const [isShowVerifyCodeModalWindow, setIsShowVerifyCodeModalWindow] = useState(false)

    return (
        <>
            <section
                css={css(styles.section)}
            >
                <h1
                    css={css(styles.h1)}
                >
                    Войти в профиль
                </h1>
                <p
                    css={css(styles.description)}
                >
                    Используйте накопленные баллы
                </p>
                <form
                    onSubmit={event => {
                        event.preventDefault()
                        authorizeUser(phone, setIsLoading, dispatchInformModalWindow, setIsShowVerifyCodeModalWindow)
                    }}
                >
                    <InputMask
                        type={"tel"}
                        mask={getPhoneMask()}
                        placeholder={"+7(___)___-__-__"}
                        value={phone}
                        onChange={v => setPhone(clearPhoneMask(v.currentTarget.value))}
                        css={css(styles.input)}
                        disabled={isLoading}
                    />
                    <LoadingButton
                        type={"submit"}
                        css={css(styles.submit)}
                        loading={isLoading}
                    >
                        <span
                            css={css(stylesMuiButtonText.text)}
                        >
                            Выслать код
                        </span>
                    </LoadingButton>
                </form>
                <p>
                    Продолжая, вы соглашаетесь с
                    <br/>
                    <a
                        css={css(styles.a)}
                        target={"_blank"}
                        href={"/loyalty.pdf"}
                        rel={"noreferrer"}
                    >
                        правилами пользовния и сбора личной информации
                    </a>
                </p>
            </section>
            <VerifyCodeModalWindow
                isShow={isShowVerifyCodeModalWindow}
                dispatchInformModalWindow={dispatchInformModalWindow}
                setIsShowVerifyCodeModalWindow={setIsShowVerifyCodeModalWindow}
                phone={phone}
            />
        </>
    )
}

export default AuthorizeForm