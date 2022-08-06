export interface IPayload {
    isShow: boolean
    text: string
}

export interface ITypes {
    show: string
    hide: string
}

export interface IAction {
    type: string,
    payload: IPayload
}