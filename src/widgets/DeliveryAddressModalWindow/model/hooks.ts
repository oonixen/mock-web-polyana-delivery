import {useEffect, useState} from "react";
import {TwoGisMap} from "../../../features/Map";
import {launchMap} from "./functions";
import {IUseInitApp} from "../interfaces/model";
import {useMapContext} from "../../../processes/Context";

export const useInitMap: IUseInitApp = ({
    mapId,
    center,
    dispatchInformModalWindow,
    setCurrentAddress,
    setIsLoading,
    cityFiasId,
    currentAddress
}) => {

    const [map, setMap] = useState<TwoGisMap|null>(null)
    const [{isMapLaunched}] = useMapContext()

    useEffect(() => {

        if (isMapLaunched)
            launchMap({
                mapId: mapId,
                center: center,
                dispatchInformModalWindow: dispatchInformModalWindow,
                setCurrentAddress: setCurrentAddress,
                setIsLoading: setIsLoading,
                cityFiasId: cityFiasId,
                setMap: setMap,
                currentAddress: currentAddress
            })
    }, [isMapLaunched])

    useEffect(() => {
        if (!currentAddress) return
        map?.addMarkerToMap([currentAddress.lat, currentAddress.lon])
    }, [currentAddress])
}