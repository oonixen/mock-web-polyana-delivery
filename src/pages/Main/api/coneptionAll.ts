import {IGetConceptionAll} from "../interfaces/api";
import {HttpRequestServerSide} from "../../../processes/Services";
import {ConceptionAll200Response, ConceptionApi} from "../../../../api";

export const getConceptionAll: IGetConceptionAll = ({
    name,
    cityFiasId,
    lat,
    lon
}) => {
    return HttpRequestServerSide.requestApi<ConceptionAll200Response, ConceptionApi>({
        ApiClass: ConceptionApi,
        request: (ApiClass) =>
            ApiClass.conceptionAll({
                cityFiasId: cityFiasId,
                name: name,
                lat: lat,
                lon: lon
            })
    })
}