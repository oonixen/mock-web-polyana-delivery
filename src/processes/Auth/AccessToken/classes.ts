import {IAccessToken} from "./interfaces";

export class AccessToken implements IAccessToken{
    private readonly name: string = "PD:USER:ACCESSTOKEN";

    get(): string | null {
        return sessionStorage.getItem(this.name);
    }

    set(token: string) {
        sessionStorage.setItem(this.name, token);
    }

    delete() {
        sessionStorage.removeItem(this.name)
    }
}
