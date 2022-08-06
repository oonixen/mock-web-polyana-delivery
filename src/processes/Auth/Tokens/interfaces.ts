import {AxiosResponse} from "axios";
import {IRefreshToken} from "../RefreshToken/interfaces";
import {IAccessToken} from "../AccessToken/interfaces";
import {AuthToken} from "../../../../api/";

export interface ITokens {
    updateAuth(
        request: (refreshToken: string) => Promise<AxiosResponse<AuthToken, any>>
    ): Promise<boolean>

    setAuth(
        access: string,
        refresh: string
    ): void

    clearAuth():void
}