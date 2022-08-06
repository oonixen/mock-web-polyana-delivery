import React from "react";
import {IBarButton} from "../interfaces/ui";
import {css} from "@emotion/react";
import {barButton} from "../styles/barButton";
import {Bars, Close} from "../../Icons";

const BarButton: React.FC<IBarButton> = ({
    isShow,
    setIsShow
}) => {

    if (isShow) return (
        <button
            css={css(barButton.closeButton)}
            onClick={() => setIsShow(false)}
        >
            <Close/>
        </button>
    )

    return (
        <button
            css={css(barButton.showButton)}
            onClick={() => setIsShow(true)}
        >
            <Bars/>
        </button>
    )
}

export default BarButton