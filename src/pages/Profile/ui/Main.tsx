import PageLayout from "../../../shared/PageLayout";
import Header from "../../../shared/Header";
import Footer from "../../../shared/Footer";
import Logo from "../../../shared/Logo";
import HeaderBackButton from "../../../shared/HeaderBackButton";
import {css} from "@emotion/react";
import {stylesPageMaxWidth} from "../../../../styles/modules/stylesPageMaxWidth";
import {styles} from "../styles/main";
import MainContainer from "../../../shared/MainContainer";
import AuthorizeForm from "./AuthorizeForm";
import {useUserContext} from "../../../processes/Context";
import {profileOrdersRoute} from "../../../app";
import BackdropLoader from "../../../shared/BackdropLoader";
import RedirectPage from "../../../shared/RedirectPage";

const Main = () => {

    const [{isLoaded}] = useUserContext()

    if (isLoaded === null) return <BackdropLoader isShow={true}/>
    else if (isLoaded) return <RedirectPage redirectUrl={profileOrdersRoute()}/>

    return (
        <PageLayout
            title={"Авторизация"}
        >
            <Header
                isSkeleton={false}
            >
                <nav
                    css={css(stylesPageMaxWidth.block, styles.nav)}
                >
                    <Logo/>
                    <HeaderBackButton/>
                </nav>
            </Header>
            <MainContainer
                styleContainer={css(styles.mainContainer)}
            >
                <div
                    css={css(stylesPageMaxWidth.block, styles.contentContainer)}
                >
                    <AuthorizeForm/>
                </div>
            </MainContainer>
            <Footer/>
        </PageLayout>
    )
}

export default Main