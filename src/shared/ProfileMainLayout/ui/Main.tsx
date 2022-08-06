import React from "react";
import {IProfileMainLayout} from "../interfaces/ui";
import PageLayout from "../../PageLayout";
import Header from "../../Header";
import Footer from "../../Footer";
import MainContainer from "../../MainContainer";
import Logo from "../../Logo";
import HeaderBackButton from "../../HeaderBackButton";
import {css} from "@emotion/react";
import {styles} from "../styles/mainLayout";
import HeaderBottomMenu from "../../HeaderBottomMenu";
import HeaderCommonContent from "./HeaderCommonContent";
import {stylesPageMaxWidth} from "../../../../styles/modules/stylesPageMaxWidth";
import {rootRoute} from "../../../app";

const Main: React.FC<IProfileMainLayout> = ({children, title}) => {
    return (
        <PageLayout
            title={title}
        >
            <Header
                isSkeleton={false}
            >
                <nav
                    css={css(stylesPageMaxWidth.block, styles.headerContainer)}
                >
                    <Logo
                        cssStyle={css(styles.logo)}
                    />
                    <div
                        css={css(styles.navContainer)}
                    >
                        <HeaderCommonContent
                            stylesContainer={css(styles.headerCommonContentContainer)}
                        />
                        <HeaderBackButton
                            href={rootRoute()}
                            stylesContainer={css(styles.backButton)}
                        />
                        <HeaderBottomMenu
                            styleContainer={css(styles.bottomMenuIconContainer)}
                        >
                            <HeaderCommonContent
                                stylesContainer={css(styles.headerCommonContentContainerMd)}
                                isShowUserInfoFormLink={true}
                            />
                        </HeaderBottomMenu>
                    </div>
                </nav>
            </Header>
            <MainContainer>
                <div
                    css={css(stylesPageMaxWidth.block, styles.mainContainer)}
                >
                    {children}
                </div>
            </MainContainer>
            <Footer/>
        </PageLayout>
    )
}

export default Main