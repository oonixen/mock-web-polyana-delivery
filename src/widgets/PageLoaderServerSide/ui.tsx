import {useEffect, useState} from "react";
import {Router} from "next/router";
import BackdropLoader from "../../shared/BackdropLoader";

const PageLoaderServerSide = () => {

    const [isShow, setIsShow] = useState(false)

    useEffect(() => {
        Router.events.on("routeChangeStart", () => {
            setIsShow(true)
        })
        Router.events.on("routeChangeComplete", () => {
            setIsShow(false)
        })
        Router.events.on("routeChangeError", () => {
            setIsShow(false)
        })
    }, [])

    return (
        <BackdropLoader isShow={isShow}/>
    )
}

export default PageLoaderServerSide