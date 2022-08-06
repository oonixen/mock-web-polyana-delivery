import {PDLogo} from "../Icons";
import {styles} from "./styles"
import {css} from "@emotion/react";
import React from "react";
import {ILogo} from "./interface";
import Link from "next/link";
import {rootRoute} from "../../app";

const Logo: React.FC<ILogo> = ({
    cssStyle= {},
    href= rootRoute(),
    isShowCursor = true
}) => {
    return (
        <Link
            href={href}
        >
            <a
                css={css(styles.block, isShowCursor ? styles.cursor : {} ,cssStyle)}
            >
                <PDLogo/>
            </a>
        </Link>
    )
}

export default Logo