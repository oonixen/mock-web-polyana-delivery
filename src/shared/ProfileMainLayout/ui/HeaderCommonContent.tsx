import {css} from "@emotion/react";
import {styles} from "../styles/headerCommonContent";
import HeaderLink from "../../HeaderLink";
import {profileAboutRoute, profileContactsRoute, profileFormRoute, profileOrdersRoute} from "../../../app";
import React from "react";
import {IHeaderCommonContent} from "../interfaces/ui";

const HeaderCommonContent: React.FC<IHeaderCommonContent> = ({
    stylesContainer= {},
    isShowUserInfoFormLink = false
}) => {

    return (
        <div
            css={css(styles.linkNavContainer, stylesContainer)}
        >
            <HeaderLink
                href={profileOrdersRoute()}
                text={"Заказы"}
                styleLink={css(styles.link)}
                styleActiveLink={css(styles.linkActive)}
            />
            <HeaderLink
                href={profileAboutRoute()}
                text={"О нас"}
                styleLink={css(styles.link)}
                styleActiveLink={css(styles.linkActive)}
            />
            <HeaderLink
                href={profileContactsRoute()}
                text={"Контакты"}
                styleLink={css(styles.link)}
                styleActiveLink={css(styles.linkActive)}
            />
            {
                isShowUserInfoFormLink &&
                    <HeaderLink
                        href={profileFormRoute()}
                        text={"Профиль"}
                        styleLink={css(styles.link)}
                        styleActiveLink={css(styles.linkActive)}
                    />
            }
        </div>
    )
}

export default HeaderCommonContent