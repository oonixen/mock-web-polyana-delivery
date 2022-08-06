import React, {useEffect, useState} from "react";
import {IHeaderLink} from "./interfaces";
import {css} from "@emotion/react";
import {styles} from "./styles";
import {useRouter} from "next/router";
import Link from "next/link";

const HeaderLink: React.FC<IHeaderLink> = ({
    href,
    text,
    Icon,
    styleLink= {},
    styleActiveLink = {}
}) => {

    const router = useRouter()
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        setIsActive(router.route + "/" === href)
    }, [router])

    return (
        <a
            css={css(styles.a, styleLink, isActive ? styleActiveLink : {})}
            onClick={() => router.push(href)}
        >
            <div
                css={css(styles.div)}
            >
                {
                    Icon &&
                        <div
                            css={css(styles.iconBlock)}
                        >
                            {Icon}
                        </div>
                }
                <span>
                    {text}
                </span>
            </div>
        </a>
    )
}

export default HeaderLink