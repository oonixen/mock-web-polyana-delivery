import {PostUserOrders200ResponseInner} from "../../../../api";
import {NextRouter} from "next/router";

export interface IContent {
}

export interface IOrderList {
    orders: PostUserOrders200ResponseInner[]
}

export interface IOrderModalWindow {
    orders: PostUserOrders200ResponseInner[],
    router: NextRouter
}