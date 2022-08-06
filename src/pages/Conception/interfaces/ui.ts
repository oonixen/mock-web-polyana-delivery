import {
    ConceptionChoose200Response,
    ConceptionChoose200ResponseCategoriesInner,
    ConceptionChoose200ResponseTagsInner,
    ProductDetail
} from "../../../../api";
import {SerializedStyles} from "@emotion/react";
import React, {Dispatch} from "react";
import {ILinkObject} from "./model";
import {NextRouter} from "next/router";
import {IPayload} from "../../../processes/Context/Basket/interfaces";

export interface IConceptionPageServerSide {
    data: ConceptionChoose200Response|null
}

export interface IConceptionPage extends IServerData {}

export interface ICategoryNavigation extends IServerData {}

export interface IHeaderCommonComponent {
    headerText: string,
    isShowBasketLink: boolean,
    styleAddressPanel?: SerializedStyles,
    styleHeaderText?: SerializedStyles,
    stylePromotionLink?: SerializedStyles,
    styleBasketLink?: SerializedStyles,
    styleAccountLink?: SerializedStyles,
}

export interface IHeaderBasketLink {
    style?: SerializedStyles
}

export interface IModalCategoriesLink {
    isShowModal: boolean,
    setIsShowModal: React.Dispatch<any>,
    linksArr: Array<ILinkObject>,
    router: NextRouter,
    dishLength: number
}

export interface IHeaderCategoriesLink extends IServerData {
}

export interface IHeaderDishSearchInput extends IServerData{

}

export interface ITagScrollGrid extends IServerData {}

export interface IBannerSection extends IServerData {}

export interface IHeaderDishScrollGrid extends IServerData {}

export interface ICategorySection extends IServerData {}

export interface IHeaderCategoriesLinkSm extends IServerData {
    router: NextRouter
}

export interface ITags extends IServerData {
    router: NextRouter
}

export interface IDishGrid extends IServerData, IContextBasket {
    dishes: Array<ProductDetail>,
    router: NextRouter
}

export interface ICategory extends IServerData, IContextBasket {
    category: ConceptionChoose200ResponseCategoriesInner,
    router: NextRouter,
}

export interface IDish extends IContextBasket{
    dish: ProductDetail,
    tags: Array<ConceptionChoose200ResponseTagsInner>,
    router: NextRouter
}

export interface IDishModalWindow extends IServerData{
    router: NextRouter,
    basket: IPayload,
    dispatchBasket: React.Dispatch<any>,
    dispatchInformModalWindow: React.Dispatch<any>
}

export interface IHeaderCategoryLink {
    category: ConceptionChoose200ResponseCategoriesInner,
    classLinks: string,
    styleButton: SerializedStyles,
    router: NextRouter,
    index: number
}

export interface IDishTags {
    conceptionTags: Array<ConceptionChoose200ResponseTagsInner>,
    dishTags: Array<string>,
    styleContainer?: SerializedStyles
}

export interface IServerData {
    data: ConceptionChoose200Response
}

interface IContextBasket {
    basket: IPayload,
    dispatchBasket: Dispatch<IPayload>,
    dispatchInformModalWindow: Dispatch<any>
}