import {getAddressParams, getPromotionsParams} from "./functions";
import {IGetAddressParams} from "../../pages/Main/interfaces/api";
import {Address} from "../../../api";

export function rootRoute (): string {
    return "/"
}

export const rootRouteServerSide: IGetAddressParams = (data)=> {
    return `${rootRoute()}?${getAddressParams(data)}`
}

export function promotionsRoute () : string {
    return `${rootRoute()}promotions/`
}

export const promotionsRouteServerSide = (cityFiasId: string) => {
    return`${promotionsRoute()}?${getPromotionsParams(cityFiasId)}`
}

export function conceptionRoute (conceptionId:string, address: Address) : string {
    return `${rootRoute()}conception/${conceptionId}?${getAddressParams(address)}`
}

export function profileRoute () : string {
    return `${rootRoute()}profile/`
}

export function profileOrdersRoute () : string {
    return `${profileRoute()}orders/`
}

export function profileFormRoute () : string {
    return `${profileRoute()}form/`
}

export function profileAboutRoute () : string {
    return `${profileRoute()}about/`
}

export function profileContactsRoute () : string {
    return `${profileRoute()}contacts/`
}

export function basketRoute () : string {
    return `${rootRoute()}basket/`
}

export function basketOrderRoute () : string {
    return `${basketRoute()}order/`
}

export function basketOrderSuccessRoute () : string {
    return `${basketOrderRoute()}success/`
}

export function basketOrderErrorRoute () : string {
    return `${basketOrderRoute()}error/`
}