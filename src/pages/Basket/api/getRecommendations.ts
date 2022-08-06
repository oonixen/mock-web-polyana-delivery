import {iHttpRequest} from "../../../processes/Services/HttpRequest/classes";
import {OrderApi, ProductDetail, ProductForServer} from "../../../../api";
import {Dispatch} from "react";

export function getRecommendations (
    conceptionId: string,
    products: ProductForServer[],
    dispatchRecommendations: Dispatch<ProductDetail[]>
) {
    iHttpRequest.requestApi<ProductDetail[], OrderApi>({
        ApiClass: OrderApi,
        request: ApiClass => ApiClass.postOrderRecommendation({conceptionId, products}),
        successCallback: response => {
            dispatchRecommendations(response.data)
        },
        errorCallback: () => {}
    })
}