import {HttpRequestServerSide} from "../../../processes/Services";
import {ConceptionChoose200Response, ConceptionApi, ConceptionChooseRequest} from "../../../../api";

export function getConception (requestObj: ConceptionChooseRequest) {
    return HttpRequestServerSide.requestApi<ConceptionChoose200Response, ConceptionApi>({
        ApiClass: ConceptionApi,
        request: (ApiClass) =>
            ApiClass.conceptionChoose(requestObj)
    })
}