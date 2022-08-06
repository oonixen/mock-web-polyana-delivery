import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import ContextProvider from "../src/widgets/ContextProvider";
import React, {useMemo} from "react";
import ErrorModalWindow from "../src/widgets/ErrorModalWindow";
import {ThemeProvider} from "@mui/material/styles";
import {theme} from "../styles/theme"
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import AppInitComponent from "../src/widgets/AppInitComponent";
import AppAddressComponent from "../src/widgets/AppAddressComponent";
import PageLoaderServerSide from "../src/widgets/PageLoaderServerSide";
import OrderStatus from "../src/widgets/OrderStatus/";

function MyApp({Component, pageProps}: AppProps) {

    return useMemo(() => (
        <ContextProvider>
            <ThemeProvider theme={theme}>
                <PageLoaderServerSide/>
                <AppInitComponent/>
                <AppAddressComponent/>
                <OrderStatus/>
                <ErrorModalWindow/>
                <Component {...pageProps}/>
            </ThemeProvider>
        </ContextProvider>
    ), [Component, pageProps])
}

export default MyApp
