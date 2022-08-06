import {useState} from "react";
import {LoadingButton} from "@mui/lab";
import {css} from "@emotion/react";
import {stylesMuiButtonText} from "../../../../styles/modules/stylesMuiButtonText";
import {styles} from "../styles/content";
import {Fist, TextingSmile} from "../../../shared/Icons";
import Image from "next/image";
import CourierImage from "../../../../public/courier.png"
import {base64} from "../../../app";
import {useInformModalWindowContext} from "../../../processes/Context";
import {sendRecall} from "../api/sendRecall";

const Content = () => {

    const mail = "example@example.com"
    const [message, setMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [, dispatchInformModalWindow] = useInformModalWindowContext()

    return (
        <div>
            <div
                css={css(styles.h1Block)}
            >
                <h1>
                    По поводу сотрудничества
                </h1>
                <figure
                    css={css(styles.fist)}
                >
                    <Fist/>
                </figure>
            </div>
            <a
                css={css(styles.a)}
                href={`mailto: ${mail}`}
            >
                {mail}
            </a>
            <h2
                css={css(styles.h2)}
            >
                Оставить отзыв
            </h2>
            <form
                css={css(styles.form)}
                onSubmit={event => {
                    event.preventDefault()
                    if (message) sendRecall(message, setIsLoading, dispatchInformModalWindow)
                }}
            >
                <textarea
                    placeholder={"Если у вас есть вопрос по вашему заказу, напишите нам "}
                    css={css(styles.textArea)}
                    onChange={value => setMessage(value.target.value)}
                    value={message}
                >
                </textarea>
                <LoadingButton
                    css={css(styles.submitButton)}
                    loading={isLoading}
                    type={"submit"}
                >
                    <span
                        css={css(stylesMuiButtonText.text)}
                    >
                        Отправить
                    </span>
                </LoadingButton>
                <figure
                    css={css(styles.smile)}
                >
                    <TextingSmile/>
                </figure>
            </form>
            <a
                target={"_blank"}
                rel={"noreferrer"}
                href={""}
                css={css(styles.workA)}
            >
                <figure
                    css={css(styles.figure)}
                >
                    <Image
                        css={css(styles.image)}
                        src={CourierImage}
                        alt={""}
                        placeholder={"blur"}
                        blurDataURL={base64.pngImageGreyColor}
                        layout={"fill"}
                        objectFit={"cover"}
                    />
                </figure>
                <div
                    css={css(styles.blockText)}
                >
                    <p
                        css={css(styles.topText)}
                    >
                        Хочу
                        <br></br>
                        у вас
                        <br></br>
                        работать
                    </p>
                    <p
                        css={css(styles.bottomText)}
                    >
                        Заполнить анкету →
                    </p>
                </div>
            </a>
        </div>
    )
}

export default Content