import {HttpRequestServerSide} from "../../../processes/Services";
import {DefaultApi, Promotion} from "../../../../api";

export const getPromotions = (cityFiasId: string) => {
    return HttpRequestServerSide.requestApi<Promotion[], DefaultApi>({
        ApiClass: DefaultApi,
        request: (ApiClass) =>
            ApiClass.postPromotions({
                cityFiasId
            })
    })
}