import PageLayout from "../../shared/PageLayout";
import Header from "../../shared/Header";
import MainContainer from "../../shared/MainContainer";
import Footer from "../../shared/Footer";
import Logo from "../../shared/Logo";
import HeaderBackButton from "../../shared/HeaderBackButton";
import {base64, rootRoute} from "../../app";
import {css} from "@emotion/react";
import {styles} from "./styles";
import {stylesPageMaxWidth} from "../../../styles/modules/stylesPageMaxWidth";
import SuccessOrderImage from "../../../public/successOrderImage.png"
import Image from "next/image";

const BasketOrderSuccess = () => (
    <PageLayout
        title={"Спасибо за заказ"}
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
                        Спасибо за заказ,
                        <br></br>
                        скоро с вами свяжется
                        <br></br>
                        наш оператор.
                    </h1>
                    <figure
                        css={css(styles.figure)}
                    >
                        <Image
                            src={SuccessOrderImage}
                            alt={""}
                            placeholder={"blur"}
                            blurDataURL={base64.pngImageGreyColor}
                            layout={"fill"}
                            objectFit={"contain"}
                        />
                    </figure>
                </div>
            </div>
        </MainContainer>
        <Footer/>
    </PageLayout>
)

export default BasketOrderSuccess