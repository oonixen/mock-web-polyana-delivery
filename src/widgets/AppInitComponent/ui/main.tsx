import {useEffect} from "react";
import {addMapScript} from "../model/functions";
import {useMapContext, useUserContext} from "../../../processes/Context";
import {getUserData} from "../../../features/UserProfile";

const AppInitComponent = () => {

    const [{}, dispatchMap] = useMapContext()
    const [{}, dispatchUser] = useUserContext()

    useEffect(() => {
        addMapScript({dispatchMap: dispatchMap})
        getUserData(dispatchUser)
    }, [])

    return null
}

export default AppInitComponent