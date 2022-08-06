import PageLayout from "../../../shared/PageLayout";
import React, {useMemo} from "react";
import {IPromotionsPage} from "../interfaces/ui";
import Header from "../../../shared/Header";
import Footer from "../../../shared/Footer";
import {css} from "@emotion/react";
import Logo from "../../../shared/Logo";
import {styles} from "../styles/main"
import HeaderBackButton from "../../../shared/HeaderBackButton";
import {stylesPageMaxWidth} from "../../../../styles/modules/stylesPageMaxWidth";
import MainContainer from "../../../shared/MainContainer";
import Promotion from "./Promotion";
import PromotionModalWindow from "../../../shared/PromotionModalWindow";
import {useRouter} from "next/router";
import {rootRoute} from "../../../app";

const Main: React.FC<IPromotionsPage> = ({promotions}) => {

    const router = useRouter()
    const jsxPromotions = useMemo(() => (
        <>
            {
                promotions.map((promotion, index) => (
                    <Promotion
                        key={promotion.id + index}
                        promotion={promotion}
                        router={router}
                    />
                ))
            }
        </>
    ), [])

    return (
        <PageLayout
            title={"Акции"}
        >
            <Header
                isSkeleton={false}
            >
                <div
                    css={css(styles.headerBlock, stylesPageMaxWidth.block)}
                >
                    <Logo
                        cssStyle={css(styles.logo)}
                    />
                    <HeaderBackButton
                        href={rootRoute()}
                    />
                </div>
            </Header>
            <MainContainer>
                <div
                    css={css(stylesPageMaxWidth.block, styles.promotionsContainer)}
                >
                    {jsxPromotions}
                </div>
                <PromotionModalWindow
                    promotions={promotions}
                    isShowAllPromotionsButton={false}
                    cityFiasId={""}
                />
            </MainContainer>
            <Footer/>
        </PageLayout>
    )
}

export default Main