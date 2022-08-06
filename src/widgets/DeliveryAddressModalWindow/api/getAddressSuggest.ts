import {Address, AddressSuggestRequest, DefaultApi} from "../../../../api"
import {HttpRequest} from "../../../processes/Services";
import {IUserHttpRequest} from "../../../processes/HTTPRequest/interfaces";

export const getAddressSuggest: IUserHttpRequest<AddressSuggestRequest, Address[]>  = ({
        requestParams,
        successCallback,
        errorCallback
}) => {

    HttpRequest.requestApi <Address [], DefaultApi> ({
        ApiClass: DefaultApi,
        request: (iApiClass) =>
            iApiClass.addressSuggest(requestParams),
        successCallback: successCallback,
        errorCallback: errorCallback
    })
}