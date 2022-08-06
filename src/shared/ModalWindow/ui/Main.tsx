import React from "react";
import {useHideDocumentScroll} from "../model/hooks"
import {IModalWindow} from "../interfaces/ui";
import {styles} from "../styles/modalWindow";
import {css} from "@emotion/react";
import {Multiply} from "../../Icons";

const ModalWindow: React.FC<IModalWindow> = ({
    children,
    isShow,
    onClickHide,
    isShowHideButton = true
}) => {

    useHideDocumentScroll(isShow)
    const onClickHideFunc = () => onClickHide && onClickHide()

    return (
        <div
            style={{display: isShow ? "block" : "none"}}
        >
            <div
                onClick={onClickHideFunc}
                css={css(styles.blackoutBlock)}
            >
                <div
                    onClick={(e) => e.stopPropagation()}
                    css={css(styles.contentBlock)}
                >
                    {
                        isShowHideButton &&
                            <button
                                css={css(styles.closeButton)}
                                onClick={onClickHideFunc}
                            >
                                <Multiply/>
                            </button>
                    }
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ModalWindow