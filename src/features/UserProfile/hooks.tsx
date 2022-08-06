import {useUserContext} from "../../processes/Context";
import {profileRoute} from "../../app";
import {useRouter} from "next/router";

export function useRedirectToProfileIfUnauthorized () {

    const [{isLoaded}] = useUserContext()
    const router = useRouter()

    if (isLoaded === false) router.push(profileRoute())
}