import {Button} from "@mui/material";
import {ArrowLeft} from "../Icons";
import {styles} from "./styles";
import {css} from "@emotion/react";
import {stylesMuiButtonText} from "../../../styles/modules/stylesMuiButtonText";
import React from "react";
import {IHeaderBackButton} from "./interfaces";
import {useRouter} from "next/router";

const HeaderBackButton: React.FC<IHeaderBackButton> = ({
    href,
    stylesContainer
}) => {

    const router = useRouter()

    return (
        <a
            css={css(stylesContainer)}
            onClick={() => href ? router.push(href) : router.back()}
        >
            <Button
                startIcon={
                    <div
                        css={css(styles.svgBlock)}
                    >
                        <ArrowLeft/>
                    </div>
                }
                css={css(styles.button)}
            >
                <span
                    css={css(styles.span, stylesMuiButtonText.text)}
                >
                    Назад
                </span>
            </Button>
        </a>
    )
}

export default HeaderBackButton