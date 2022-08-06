import React, {useState} from "react";
import BarButton from "./BarButton";
import {css} from "@emotion/react";
import {styles} from "../styles/main";
import {IHeaderBottomMenu} from "../interfaces/ui";

const HeaderBottomMenu: React.FC<IHeaderBottomMenu> = ({children, styleContainer = {}}) => {

    const [isShow, setIsShow] = useState(false)

    return (
        <div
            css={css(styles.block, styleContainer)}
        >
            <BarButton
                isShow={isShow}
                setIsShow={setIsShow}
            />
            {
                isShow ?
                    <div
                        css={css(styles.modalBlock)}
                    >
                        {children}
                    </div>
                    :
                    null
            }
        </div>
    )
}

export default HeaderBottomMenu