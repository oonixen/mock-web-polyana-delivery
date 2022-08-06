export interface IGetCurrentLocation {
    ({}: IParams): void
}

interface IParams {
    onSuccess: (pos: GeolocationPosition) => any,
    onError: (text: string) => any
}