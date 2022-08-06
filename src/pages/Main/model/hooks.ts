import {useCityContext, useDeliveryAddressContext} from "../../../processes/Context";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {rootRouteServerSide} from "../../../app";
import {ConceptionAll200Response} from "../../../../api";

export function useRerenderServerSide (data: ConceptionAll200Response|null) {
    const [{city}] = useCityContext()
    const [{address}] = useDeliveryAddressContext()
    const router = useRouter()

    useEffect(() => {
        if (!data && city && address)
            router.push(rootRouteServerSide({
                cityFiasId: city.cityFiasId,
                lat: address.lat,
                lon: address.lon,
                name: address.name
            }))
    },[city, address, router])
}