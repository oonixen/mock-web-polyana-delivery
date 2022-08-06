import React, {Reducer, useReducer} from "react";

export interface IPayload {
    firstName: string,
    secondName: string,
    birthday: string,
    email: string
}

interface IAction {
    type: string,
    payload: IPayload
}

export const types = {
    change: "change",
    changeFirstName: "changeFirstName",
    changeSecondName: "changeSecondName",
    changeBirthday: "changeBirthday",
    changeEmail: "changeEmail",
}

function reducer (state:IPayload, action:IAction) {
    switch (action.type) {
        case types.change:
            return {
                ...state, firstName: action.payload.firstName, secondName: action.payload.secondName,
                birthday: action.payload.birthday, email: action.payload.email
            }
        case types.changeFirstName:
            return {...state, firstName: action.payload.firstName}
        case types.changeSecondName:
            return {...state, secondName: action.payload.secondName}
        case types.changeBirthday:
            return {...state, birthday: action.payload.birthday}
        case types.changeEmail:
            return {...state, email: action.payload.email}
        default:
            return state
    }
}

function init(initValue: IPayload): IPayload {
    return {
        firstName: initValue.firstName,
        secondName: initValue.secondName,
        birthday: initValue.birthday,
        email: initValue.email
    }
}

export function useReturnUserFormReducer (defaultState: IPayload): [IPayload, React.Dispatch<IAction>] {
    return useReducer<Reducer<IPayload, IAction>, IPayload>(reducer, defaultState, init)
}