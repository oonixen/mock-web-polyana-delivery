import PageLayout from "../../../shared/PageLayout";
import Header from "../../../shared/Header";
import MainContainer from "../../../shared/MainContainer";
import Footer from "../../../shared/Footer";
import Logo from "../../../shared/Logo";
import HeaderBackButton from "../../../shared/HeaderBackButton";
import {css} from "@emotion/react";
import {styles} from "../styles/basketOrder";
import {stylesPageMaxWidth} from "../../../../styles/modules/stylesPageMaxWidth";
import Content from "./Content";

const BasketOrder = () => {

    return (
        <PageLayout
            title={"Заказ"}
        >
            <Header>
                <div
                    css={css(stylesPageMaxWidth.block ,styles.headerContainer)}
                >
                    <Logo/>
                    <HeaderBackButton/>
                </div>
            </Header>
            <MainContainer>
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

export default BasketOrder