import {AxiosResponse} from "axios";
import {ITokens} from "../Auth/Tokens/interfaces";
import {AuthToken} from "../../../api";
import {IAccessToken, IRefreshToken} from "../Auth";

export interface IHandleRequest {
    <Res>(
        {}: IRequest <Res>
    ): void
}

interface IRequest <Res> extends ICallbacks <Res>{
    ApiClass: any,
    request: (iApiClass: any) => Promise<AxiosResponse<Res, any>>,
    updateAuthRequest: (refreshToken: string) => Promise<AxiosResponse<AuthToken, any>>,
    attempt?: number
}

export interface ICallbacks <Res> {
    successCallback?: (response: AxiosResponse<Res, any>) => any,
    errorCallback?: (error: Error) => any
}

export interface IUserHttpRequest <RequestParam, Response> {
    ({}: IParams<RequestParam, Response>) : void
}

interface IParams <RequestParam, Response> extends ICallbacks<Response>{
    requestParams?: RequestParam,
}

