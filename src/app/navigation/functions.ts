import {IRootRouteServerSide} from "../../pages/Main/interfaces/api";

export const getAddressParams: IRootRouteServerSide = ({cityFiasId, lat, lon, name}) => {
    return `cityFiasId=${cityFiasId}&lat=${lat}&lon=${lon}&name=${name}`
}

export const getPromotionsParams = (cityFiasId: string) => {
    return `cityFiasId=${cityFiasId}`
}

