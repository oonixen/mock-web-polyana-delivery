import {css} from "@emotion/react";
import {styles} from "./styles";
import {Button as ButtonMUI} from "@mui/material";
import React from "react";
import {IDishModalWindowContainer} from "./interfaces";
import {symbols} from "../../app";

const DishModalWindowContainer: React.FC<IDishModalWindowContainer> = ({
    children,
    sum,
    onClickAddButton,
    stylesContainer= {},
    Button
}) => {
    return (
        <article
            css={css(styles.container, stylesContainer)}
        >
            {
                children
            }
            <div
                css={css(styles.bottomContainer)}
            >
                <span
                    css={css(styles.price)}
                >
                    {`${sum} ${symbols.ruble}`}
                </span>
                {
                    Button ?
                        Button
                        :
                        <ButtonMUI
                            css={css(styles.addButton)}
                            onClick={onClickAddButton}
                        >
                            <span>
                                Добавить
                            </span>
                        </ButtonMUI>
                }
            </div>
        </article>
    )
}

export default DishModalWindowContainer