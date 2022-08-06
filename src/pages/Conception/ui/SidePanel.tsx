import {styles} from "../styles/sidePanel";
import {css} from "@emotion/react";
import {useEffect, useState} from "react";
import {GetSidePanel200Response} from "../../../../api";
import {getSidePanelContent} from "../api/getSidePanelContent";
import Image from "next/image";
import {base64} from "../../../app";
import {Button} from "@mui/material";
import {getDishImage} from "../model/functions";

const SidePanel = () => {

    const [content, setContent] = useState<GetSidePanel200Response|null>(null)
    const [isShow, setIsShow] = useState(false)

    useEffect(() => {
        getSidePanelContent(setContent)
    }, [])

    return (
        <section
            css={css(styles.section, isShow ? styles.sectionOpen : {})}
        >
            <figure
                css={css(styles.figure)}
            >
                <Image
                    css={css(styles.image)}
                    src={getDishImage(content?.image)}
                    alt={""}
                    placeholder={"blur"}
                    blurDataURL={base64.pngImageGreyColor}
                    layout={"fill"}
                    objectFit={"cover"}
                />
            </figure>
            <div
                css={css(styles.informContainer)}
            >
                <h1
                    css={css(styles.h1)}
                >
                    {content?.title}
                </h1>
                <p>
                    {content?.description}
                </p>
                <a
                    href={content?.url}
                    target={"_blank"}
                    rel={"noreferrer"}
                >
                    <Button
                        css={css(styles.button)}
                    >
                        Перейти
                    </Button>
                </a>
            </div>
            <button
                css={css(styles.switchButton, isShow ? styles.switchButtonShow : {})}
                onClick={() => setIsShow(!isShow)}
            >
                {
                    isShow ? "ЗАКРЫТЬ" : "КЕЙТЕРИНГ"
                }
            </button>
        </section>
    )
}

export default SidePanel