import {IPayload} from "./useReturnUserFormReducer";
import {User} from "../../../../api";
import {Tokens} from "../../../processes/Auth";
import {setUser} from "../../../processes/Context";
import {Dispatch} from "react";
import {NextRouter} from "next/router";
import {profileRoute} from "../../../app";

export function checkIsChangedUserForm (form: IPayload, user: User) {
    for (const value in form)
        // @ts-ignore
        if (form[value] !== user[value]) return true

    return false
}

export function logOut (dispatchUser: Dispatch<any>, router: NextRouter) {
    new Tokens().clearAuth()
    setUser({dispatch: dispatchUser, user: null, isLoaded: false})
    router.push(profileRoute())
}

export function returnReducerStateFromUserObj (user: User): IPayload {
    return {
        firstName: user.firstName ? user.firstName : "",
        secondName: user.secondName ? user.secondName : "",
        birthday: user.birthday ? user.birthday : "",
        email: user.email ? user.email : ""
    }
}