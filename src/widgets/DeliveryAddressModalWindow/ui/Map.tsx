import {GeoArrow} from "../../../shared/Icons"
import React from "react";
import {IMapPage} from "../interfaces/ui";
import {useInitMap} from "../model/hooks";
import {styles} from "../styles/map";
import {LoadingButton} from "@mui/lab";
import {onClickGeoPosition} from "../model/functions";
import {css} from "@emotion/react";

const Map: React.FC<IMapPage> = ({
    dispatchInformModalWindow,
    isLoading,
    setIsLoading,
    city,
    setCurrentAddress,
    currentAddress
}) => {

    const mapId = "MapID"

    useInitMap({
        mapId: mapId,
        center: [city.lat, city.lon],
        currentAddress: currentAddress,
        setIsLoading: setIsLoading,
        dispatchInformModalWindow: dispatchInformModalWindow,
        setCurrentAddress: setCurrentAddress,
        cityFiasId: city.cityFiasId
    })

    return (
        <div
            css={css(styles.block)}
        >
            <div
                id={mapId}
                css={css(styles.map)}
            />
            <LoadingButton
                css={css(styles.button)}
                variant={"contained"}
                startIcon={<GeoArrow style={{width: 22, height: 23}}/>}
                onClick={() => onClickGeoPosition({
                    setCurrentAddress: setCurrentAddress,
                    dispatchInformModalWindow: dispatchInformModalWindow,
                    cityFiasId: city.cityFiasId,
                    setIsLoading: setIsLoading
                })}
                loading={isLoading}
                loadingPosition={"start"}
            >
                определить адрес
            </LoadingButton>
        </div>
    )
}

export default Map