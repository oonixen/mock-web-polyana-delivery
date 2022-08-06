import PageLayout from "../src/shared/PageLayout";
import Header from "../src/shared/Header";
import MainContainer from "../src/shared/MainContainer";
import Footer from "../src/shared/Footer";
import Logo from "../src/shared/Logo";
import {css} from "@emotion/react";
import {styles404Page} from "../styles/modules/styles404Page";
import {stylesPageMaxWidth} from "../styles/modules/stylesPageMaxWidth";
import HeaderBackButton from "../src/shared/HeaderBackButton";
import {Button} from "@mui/material";
import {stylesMuiButtonText} from "../styles/modules/stylesMuiButtonText";
import Link from "next/link";
import {rootRoute} from "../src/app";

const NotFoundPage = () => (
    <PageLayout
        title={"Страница не найдена"}
    >
        <Header>
            <div
                css={css(stylesPageMaxWidth.block, styles404Page.headerContainer)}
            >
                <Logo/>
                <HeaderBackButton/>
            </div>
        </Header>
        <MainContainer>
            <div
                css={css(styles404Page.mainContainer)}
            >
                <h1
                    css={css(styles404Page.h1)}
                >
                    Страница не найдена
                </h1>
                <Link
                    href={rootRoute()}
                >
                    <a>
                        <Button>
                            <span
                                css={css(stylesMuiButtonText.text)}
                            >
                                    Главная страница
                            </span>
                        </Button>
                    </a>
                </Link>
            </div>
        </MainContainer>
        <Footer/>
    </PageLayout>
)

export default NotFoundPage