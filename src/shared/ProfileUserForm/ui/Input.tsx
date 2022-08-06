import React from "react";
import {IInput} from "../interfaces/ui";
import {css} from "@emotion/react";
import {styles} from "../styles/input";

const Input: React.FC<IInput> = ({
    type,
    value,
    title,
    onChange= () => {},
    subtitle,
    disabled= false
}) => {
    return (
        <div
            css={css(styles.block)}
        >
            <div
                css={css(styles.titleBlock)}
            >
                <p>
                    {`${title}:`}
                </p>
                {
                    subtitle &&
                    <p
                        css={css(styles.subtitle)}
                    >
                        {subtitle}
                    </p>
                }
            </div>
            <input
                onChange={value => onChange(value.target.value)}
                css={css(styles.input)}
                type={type}
                value={value}
                disabled={disabled}
            />
        </div>
    )
}

export default Input