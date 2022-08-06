import Cookies from "js-cookie"
import {IRefreshToken} from "./interfaces"

export class RefreshToken implements IRefreshToken{

    private readonly name: string = "PD:USER:REFRESHTOKEN";
    private readonly options: Cookies.CookieAttributes = {
        expires: 365,
        secure: true,
        path: "/",
        sameSite: "strict",
    }

    get(): string | undefined {
        return Cookies.get(this.name);
    }

    set(token: string) {
        Cookies.set(this.name, token, this.options);
    }

    delete() {
        Cookies.remove(this.name, this.options)
    }
}