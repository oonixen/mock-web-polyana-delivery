import {ITokens} from "./interfaces";
import {AxiosResponse} from "axios";
import {AuthToken} from "../../../../api/";
import {AccessToken} from "../AccessToken/classes";
import {RefreshToken} from "../RefreshToken/classes";

export class Tokens implements ITokens{

    async updateAuth(
        request: (refreshToken: string) => Promise<AxiosResponse<AuthToken, any>>
    ) {

        const refreshToken = new RefreshToken().get()

        if (!refreshToken) return false

        const response = await request(refreshToken)

        if (response.status !== 200) return false

        this.setAuth(response.data.access, response.data.refresh)

        return true
    }

    setAuth(access: string, refresh: string) {
        const iAccess = new AccessToken()
        const iRefresh = new RefreshToken()

        iAccess.set(access)
        iRefresh.set(refresh)
    }

    clearAuth() {
        const iAccess = new AccessToken()
        const iRefresh = new RefreshToken()

        iAccess.delete()
        iRefresh.delete()
    }
}