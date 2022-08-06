import {ParsedUrlQuery} from "querystring";

export interface IConceptionParams extends ParsedUrlQuery {
    id: string,
    cityFiasId: string,
    lat: string,
    lon: string,
    name: string
}