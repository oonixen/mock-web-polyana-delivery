import Header from "../../shared/Header";
import {css} from "@emotion/react";
import {stylesPageMaxWidth} from "../../../styles/modules/stylesPageMaxWidth";
import {styles} from "./styles";
import Logo from "../../shared/Logo";
import HeaderBackButton from "../../shared/HeaderBackButton";
import {rootRoute} from "../../app";
import MainContainer from "../../shared/MainContainer";
import Footer from "../../shared/Footer";
import PageLayout from "../../shared/PageLayout";

const BasketOrderError = () => (
    <PageLayout
        title={"Заказ не создан"}
    >
        <Header>
            <div
                css={css(stylesPageMaxWidth.block, styles.headerContainer)}
            >
                <Logo/>
                <HeaderBackButton
                    href={rootRoute()}
                />
            </div>
        </Header>
        <MainContainer>
            <div
                css={css(stylesPageMaxWidth.block)}
            >
                <div
                    css={css(styles.container)}
                >
                    <h1
                        css={css(styles.h1)}
                    >
                        Заказ не удалось создать
                    </h1>
                </div>
            </div>
        </MainContainer>
        <Footer/>
    </PageLayout>
)

export default BasketOrderError