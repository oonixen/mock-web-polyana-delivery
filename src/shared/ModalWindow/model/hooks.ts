import {useEffect} from "react";

export function useHideDocumentScroll (isShow: boolean) {

    useEffect(() => {

        if (!isShow) return

        document.body.style.overflow = "hidden"

        return () => {
            document.body.style.overflow = "auto"
        }
    }, [isShow])
}