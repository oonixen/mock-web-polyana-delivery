import {Address, Conception, ConceptionAll200Response} from "../../../../api";
import {SerializedStyles} from "@emotion/react";
import {NextRouter} from "next/router";
import React from "react";

export interface IMainPage extends IServerData {}

export interface IConceptionsBlock extends IServerData {
}

export interface IMarkets extends IServerData {
    dispatchInformModalWindow: React.Dispatch<any>
}

export interface IMarketsCarousel {
    markets: Array<Conception>,
    dispatchInformModalWindow: React.Dispatch<any>
}

export interface IRestaurants extends IServerData {
    dispatchInformModalWindow: React.Dispatch<any>
}

export interface IRestaurantsGrid {
    restaurants: Array<Conception>,
    dispatchInformModalWindow: React.Dispatch<any>
}

export interface IMarket {
    market: Conception
    dispatchInformModalWindow: React.Dispatch<any>,
    address: Address,
    router: NextRouter
}

export interface IHeaderCommonContent {
    styleLink?: SerializedStyles,
    styleHeaderText?: SerializedStyles,
    styleAddressPanelControl?: SerializedStyles
}

export interface IServerData {
    data: ConceptionAll200Response|null,
}