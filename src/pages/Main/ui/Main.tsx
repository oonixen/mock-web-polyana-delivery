import PageLayout from "../../../shared/PageLayout";
import React from "react";
import {IMainPage} from "../interfaces/ui";
import Header from "../../../shared/Header";
import ConceptionsBlock from "./ConceptionsBlock";
import Footer, {footerTypes} from "../../../shared/Footer";
import {css} from "@emotion/react";
import Logo from "../../../shared/Logo";
import {styles} from "../styles/main";
import HeaderUserIcon from "../../../shared/HeaderUserIcon";
import HeaderBottomMenu from "../../../shared/HeaderBottomMenu";
import HeaderCommonContent from "./HeaderCommonContent";
import MainContainer from "../../../shared/MainContainer";

const MainPage: React.FC<IMainPage> = ({
    data
}) => {

    return (
        <PageLayout>
            <Header
                cssStyle={css(styles.header)}
                isSkeleton={!Boolean(data)}
            >
                <Logo
                    cssStyle={css(styles.logo)}
                    isShowCursor={false}
                />
                <HeaderCommonContent
                    styleLink={css(styles.styleLink)}
                    styleHeaderText={css(styles.styleHeaderText)}
                    styleAddressPanelControl={css(styles.styleAddressPanelControl)}
                />
                <HeaderUserIcon/>
                <HeaderBottomMenu
                    styleContainer={css(styles.headerBottomMenu)}
                >
                    <HeaderCommonContent
                        styleLink={css(styles.styleLinkSm, styles.containerSM)}
                        styleHeaderText={css(styles.styleHeaderTextSm, styles.containerSM)}
                        styleAddressPanelControl={css(styles.styleAddressPanelControlSm, styles.containerSM)}
                    />
                </HeaderBottomMenu>
            </Header>
            <MainContainer>
                <ConceptionsBlock
                    data={data}
                />
            </MainContainer>
            <Footer
                type={footerTypes.withDescription}
            />
        </PageLayout>
    )
}

export default MainPage