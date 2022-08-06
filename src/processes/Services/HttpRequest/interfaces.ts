import {AxiosResponse} from "axios";
import {ICallbacks} from "../../HTTPRequest/interfaces";

export interface IHttpRequest {
    requestApi <Res, ApiCLass> (
        {}: IRequest<Res, ApiCLass>
    ): void
}

export interface IRequest <Res, ApiClass> extends ICallbacks<Res>{
    ApiClass: any,
    request: (ApiClass: ApiClass) => Promise<AxiosResponse<Res, any>>,
}

export interface IHttpRequestServerSide {
    requestApi <Res, ApiClass> (
        {}: IRequest<Res, ApiClass>
    ): Promise<Res|null>
}