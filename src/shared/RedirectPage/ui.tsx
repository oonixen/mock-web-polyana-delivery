import {IRedirectPage} from "./interfaces";
import React, {useEffect} from "react";
import {useRouter} from "next/router";

const RedirectPage: React.FC<IRedirectPage> = ({
    redirectUrl
}) => {

    const route = useRouter()

    useEffect(() => {
        route.push(redirectUrl)
    }, [])

    return null
}

export default RedirectPage