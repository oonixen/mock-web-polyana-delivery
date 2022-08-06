import PageLayout from "../../../shared/PageLayout";
import Header from "../../../shared/Header";
import MainContainer from "../../../shared/MainContainer";
import Footer from "../../../shared/Footer";
import HeaderBackButton from "../../../shared/HeaderBackButton";
import Logo from "../../../shared/Logo";
import {css} from "@emotion/react";
import {stylesPageMaxWidth} from "../../../../styles/modules/stylesPageMaxWidth";
import {styles} from "../styles/basketPage";
import Content from "./Content";

const BasketPage = () => {
    return (
        <PageLayout
            title={"Корзина"}
        >
            <Header
                isSkeleton={false}
            >
                <div
                    css={css(stylesPageMaxWidth.block, styles.headerBlock)}
                >
                    <Logo/>
                    <HeaderBackButton/>
                </div>
            </Header>
            <MainContainer
                styleContainer={css(styles.mainContainer)}
            >
                <div
                    css={css(stylesPageMaxWidth.block)}
                >
                    <Content/>
                </div>
            </MainContainer>
            <Footer/>
        </PageLayout>
    )
}

export default BasketPage