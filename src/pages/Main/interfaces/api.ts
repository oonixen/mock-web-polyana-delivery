import {Address, ConceptionAll200Response} from "../../../../api";
import {ParsedUrlQuery} from "querystring";

export interface IGetConceptionAll {
    ({}: Address): Promise<ConceptionAll200Response|null>
}

export interface IRootRouteServerSide {
    ({}:Address):string
}

export interface IGetAddressParams {
    ({}:Address):string
}

export interface IMainServerSide extends ParsedUrlQuery{
    cityFiasId: string,
    name: string,
    lat: string,
    lon: string
}