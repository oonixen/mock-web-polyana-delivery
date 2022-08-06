import {addScript} from "../../../processes/DocumentScripts";
import {TwoGisConstants} from "../../../features/Map";
import {setIsMapLaunched} from "../../../processes/Context";
import {IAddMapScript} from "../interfaces/model";

export const addMapScript: IAddMapScript = ({
    dispatchMap
}) => {
    addScript(TwoGisConstants.MAP_LINK, () => {
        setIsMapLaunched({dispatch: dispatchMap, isMapLaunched: true})
    })
}