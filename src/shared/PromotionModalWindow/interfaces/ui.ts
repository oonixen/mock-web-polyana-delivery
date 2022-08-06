import {Promotion} from "../../../../api";

export interface IPromotionModalWindow extends IParams{
    promotions: Promotion[]
}

export interface IPromotionModalWindowContent extends IParams{
    promotion: Promotion,
}

interface IParams {
    isShowAllPromotionsButton?: boolean
    cityFiasId: string
}