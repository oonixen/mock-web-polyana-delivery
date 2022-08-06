import {DefaultUserIcon} from "../Icons";
import Link from "next/link"
import {css} from "@emotion/react";
import {styles} from "./styles";
import {profileRoute} from "../../app";

const HeaderUserIcon = () => {

    return (
        <Link
            href={profileRoute()}
        >
            <a
                css={css(styles.a)}
            >
                <DefaultUserIcon/>
            </a>
        </Link>
    )
}

export default HeaderUserIcon