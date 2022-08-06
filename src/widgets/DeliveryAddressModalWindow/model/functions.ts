import {getCurrentLocation} from "../../../processes/Location";
import {getAddressSuggest} from "../api/getAddressSuggest";
import {
    ILaunchMap,
    IMakeMapSuggestRequest,
    IMakeSuggestionRequest,
    IOnClickGeoPosition,
    IOnClickSubmit,
    IOnInputSuggestion
} from "../interfaces/model";
import {setAddress} from "../../../features/DeliveryAddress";
import {setDeliveryAddressModalWindow, showInformModalWindow} from "../../../processes/Context";
import {TwoGisMap} from "../../../features/Map";
import {errors} from "../../../app";

export const onClickGeoPosition: IOnClickGeoPosition = ({
    setCurrentAddress,
    dispatchInformModalWindow,
    cityFiasId,
    setIsLoading
}) => {

    const successAction = (pos: GeolocationPosition) => {

        const lat = pos.coords.latitude
        const lon = pos.coords.longitude

        makeMapSuggestRequest({
            lat: lat,
            lon: lon,
            setCurrentAddress: setCurrentAddress,
            dispatchInformModalWindow: dispatchInformModalWindow,
            cityFiasId: cityFiasId,
            setIsLoading: setIsLoading
        })
    }

    setIsLoading(true)

    getCurrentLocation({
        onSuccess: successAction,
        onError: (text) => {
            showInformModalWindow(dispatchInformModalWindow, text)
            setIsLoading(false)
        }
    })
}

export const onInputSuggestion: IOnInputSuggestion = () => {

    let timer: NodeJS.Timeout

    return ({
        address,
        cityFiasId,
        dispatchInformModalWindow,
        setSuggestions,
        setIsLoadingSuggestions,
    }) => {

        setIsLoadingSuggestions(true)

        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            makeSuggestionRequest({
                address: address,
                cityFiasId: cityFiasId,
                dispatchInformModalWindow: dispatchInformModalWindow,
                setSuggestions: setSuggestions,
                setIsLoadingSuggestions: setIsLoadingSuggestions
            })
        }, 1000)
    }
}

const makeSuggestionRequest: IMakeSuggestionRequest = ({
    address,
    cityFiasId,
    dispatchInformModalWindow,
    setSuggestions,
    setIsLoadingSuggestions,
}) => {

    getAddressSuggest({
        requestParams: {
            address: address,
            cityFiasId: cityFiasId,
        },
        successCallback: (response) => {
            const addresses = response.data
            setSuggestions(addresses)
            setIsLoadingSuggestions(false)
        },
        errorCallback: () => {
            showInformModalWindow(dispatchInformModalWindow, errors.DEFAULT_ERROR_TEXT)
            setIsLoadingSuggestions(false)
        }
    })
}

export const makeMapSuggestRequest: IMakeMapSuggestRequest = ({
    setIsLoading,
    cityFiasId,
    lon,
    lat,
    dispatchInformModalWindow,
    setCurrentAddress
}) => {

    setIsLoading(true)

    getAddressSuggest({
        requestParams: {
            cityFiasId: cityFiasId,
            lat: lat,
            lon: lon
        },
        successCallback: (response) => {
            const addresses = response.data
            const address = addresses.length > 0 ? addresses[0] : null

            setIsLoading(false)

            if (!address) showInformModalWindow(dispatchInformModalWindow, "Ваш адрес не удалось определить")
            else setCurrentAddress(address)
        },
        errorCallback: () => {
            showInformModalWindow(dispatchInformModalWindow, errors.DEFAULT_ERROR_TEXT)
            setIsLoading(false)
        }
    })
}

export const onClickSubmit: IOnClickSubmit = ({
    currentAddress,
    dispatchAddress,
    dispatchInformModalWindow,
    dispatchDeliveryAddressModalWindow
}) => {
    if (currentAddress) {
        setAddress(currentAddress, dispatchAddress)
        setDeliveryAddressModalWindow({dispatch: dispatchDeliveryAddressModalWindow, isShow: false})
    }
    else
        showInformModalWindow(dispatchInformModalWindow, "Выберите адрес из списка или укажите на карте")
}

export const launchMap: ILaunchMap = ({
    mapId,
    center,
    dispatchInformModalWindow,
    setCurrentAddress,
    setIsLoading,
    cityFiasId,
    setMap,
    currentAddress
}) => {

    const currentMap = new TwoGisMap()

    currentMap.launchMap(mapId, center, (lat, lon) => {
            makeMapSuggestRequest({
                lat: lat,
                lon: lon,
                dispatchInformModalWindow: dispatchInformModalWindow,
                setCurrentAddress: setCurrentAddress,
                setIsLoading: setIsLoading,
                cityFiasId: cityFiasId,
            })
        },
        currentAddress
    )
    setMap(currentMap)
}