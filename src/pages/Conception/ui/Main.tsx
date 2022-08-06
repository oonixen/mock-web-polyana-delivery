import React from "react";
import {IConceptionPage} from "../interfaces/ui";
import PageLayout from "../../../shared/PageLayout";
import Header from "../../../shared/Header";
import Logo from "../../../shared/Logo";
import MainContainer from "../../../shared/MainContainer";
import Footer from "../../../shared/Footer";
import {styles} from "../styles/main";
import {css} from "@emotion/react";
import HeaderCommonComponent from "./HeaderCommonComponent";
import HeaderUserIcon from "../../../shared/HeaderUserIcon";
import HeaderBottomMenu from "../../../shared/HeaderBottomMenu";
import HeaderCategoryNavigation from "./HeaderCategoryNavigation";
import BannerSection from "./BannerSection";
import TagScrollGrid from "./TagScrollGrid";
import CategorySection from "./CategorySection";
import ContentPromotionModalWindow from "./ContentPromotionModalWindow";
import SidePanel from "./SidePanel";

const ConceptionPage: React.FC<IConceptionPage> = ({data}) => {

    const headerText = `${data.openTime} - ${data.closeTime}`

    return (
        <PageLayout
            title={data.name}
            description={data.description}
        >
            <Header
                isSkeleton={false}
                cssStyle={css(styles.header)}
            >
                <Logo
                    isShowCursor={true}
                    cssStyle={css(styles.logo)}
                />
                <HeaderCommonComponent
                    styleHeaderText={css(styles.headerText)}
                    headerText={headerText}
                    isShowBasketLink={true}
                    styleAddressPanel={css(styles.addressPanel)}
                    stylePromotionLink={css(styles.promotions)}
                    styleBasketLink={css(styles.basket)}
                    styleAccountLink={css(styles.account)}
                />
                <HeaderUserIcon/>
                <HeaderBottomMenu
                    styleContainer={css(styles.headerBottomMenuContainer)}
                >
                    <HeaderCommonComponent
                        headerText={headerText}
                        isShowBasketLink={false}
                        styleAddressPanel={css(styles.addressPanelSm)}
                        styleHeaderText={css(styles.headerTextSm)}
                        stylePromotionLink={css(styles.promotionsSm)}
                        styleAccountLink={css(styles.accountSm)}
                    />
                </HeaderBottomMenu>
            </Header>
            <MainContainer>
                <HeaderCategoryNavigation data={data}/>
                <div
                    css={css(styles.mainContainerIndent)}
                >
                    <BannerSection data={data}/>
                    <TagScrollGrid data={data}/>
                    <CategorySection data={data}/>
                    <ContentPromotionModalWindow data={data}/>
                    <SidePanel/>
                </div>
            </MainContainer>
            <Footer/>
        </PageLayout>
    )
}

export default ConceptionPage