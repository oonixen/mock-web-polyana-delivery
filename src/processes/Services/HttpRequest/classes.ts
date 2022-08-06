import {IHttpRequest, IHttpRequestServerSide, IRequest} from "./interfaces";
import {handleRequest} from "../../HTTPRequest";
import {AuthApi} from "../../../../api";
import {webRequest} from "../../../app";

class HttpRequest implements IHttpRequest {

    private static instance: HttpRequest

    static getInstance(): HttpRequest {
        if (!HttpRequest.instance) HttpRequest.instance = new HttpRequest()

        return HttpRequest.instance
    }

    requestApi<Res, ApiCLass>({
        ApiClass,
        request,
        successCallback,
        errorCallback
    }: IRequest<Res, ApiCLass>) {

        handleRequest <Res> (
            {
                ApiClass: ApiClass,
                request: request,
                updateAuthRequest: (refreshToken) =>
                    new AuthApi().authRefreshToken({refreshToken: refreshToken}),
                successCallback,
                errorCallback
            }
        )
    }
}

export const iHttpRequest = HttpRequest.getInstance()

class HttpRequestServerSide implements IHttpRequestServerSide {

    private static instance: HttpRequestServerSide

    static getInstance(): HttpRequestServerSide {
        if (!HttpRequestServerSide.instance) HttpRequestServerSide.instance = new HttpRequestServerSide()

        return HttpRequestServerSide.instance
    }

    async requestApi<Res, ApiClass>({
        ApiClass,
        request
    }: IRequest<Res, ApiClass>): Promise<Res|null> {

        const iApiClass = new ApiClass(
            undefined,
            webRequest.API_HOST
        )

        try {
            const response = await request(iApiClass)
            return response.data
        }
        catch (e) {
            return null
        }
    }
}

export const iHttpRequestServerSide = HttpRequestServerSide.getInstance()