import {css} from "@emotion/react";
import {styles} from "../styles/counter";
import React from "react";
import {ICounter} from "../interfaces/ui";

const Counter: React.FC<ICounter> = ({count, decrease, increase}) => {
    return (
        <div
            css={css(styles.container)}
        >
            <button
                css={css(styles.button, styles.leftButton)}
                onClick={decrease}
            >
                <span
                    css={css(styles.buttonText)}
                >
                    -
                </span>
            </button>
            <div
                css={css(styles.textContainer)}
            >
                <span
                    css={css(styles.text)}
                >
                    {count}
            </span>
            </div>
            <button
                css={css(styles.button, styles.rightButton)}
                onClick={increase}
            >
                <span
                    css={css(styles.buttonText)}
                >
                    +
                </span>
            </button>
        </div>
    )
}

export default Counter