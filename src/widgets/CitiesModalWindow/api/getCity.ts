import {IUserHttpRequest} from "../../../processes/HTTPRequest/interfaces";
import {HttpRequest} from "../../../processes/Services";
import {Address, DefaultApi} from "../../../../api";

export const getCity: IUserHttpRequest<undefined, Address[]> = ({
    requestParams,
    successCallback,
    errorCallback

}) => {
    HttpRequest.requestApi <Address[], DefaultApi> ({
        ApiClass: DefaultApi,
        request: (iApiClass: DefaultApi) => iApiClass.getCity(),
        successCallback: successCallback,
        errorCallback: errorCallback
    })
}