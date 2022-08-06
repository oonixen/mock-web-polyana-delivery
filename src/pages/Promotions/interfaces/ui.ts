import {Promotion} from "../../../../api";
import {NextRouter} from "next/router";

export interface IPromotions {
    data: Promotion[] | null
}

export interface IPromotionsPage extends IServerData {}

export interface IPromotion {
    promotion: Promotion,
    router: NextRouter
}

interface IServerData {
    promotions: Promotion[]
}