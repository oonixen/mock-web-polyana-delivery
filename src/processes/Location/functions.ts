import {IGetCurrentLocation} from "./interfaces";

export const getCurrentLocation: IGetCurrentLocation = ({
    onSuccess,
    onError
}) => {

    const options: PositionOptions = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    }

    const success = (pos: GeolocationPosition) => onSuccess(pos)

    const error = () => {
        onError("Невозможно определить адрес, возможно, у вас отключена геолокация")
    }

    navigator.geolocation.getCurrentPosition(success, error, options)
}