import React, {Dispatch, useEffect, useMemo, useState} from "react";
import {createIntersectionObserver, createTagCategory, scrollToCategory, scrollToTagCategory} from "./functions";
import Category from "../ui/Category";
import {ConceptionChoose200Response, ConceptionChoose200ResponseCategoriesInner} from "../../../../api";
import {NextRouter} from "next/router";
import HeaderCategoryLink from "../ui/HeaderCategoryLink";
import {SerializedStyles} from "@emotion/react";
import HeaderModalCategoriesLink from "../ui/HeaderModalCategoriesLink";
import {ILinkObject, ITagSection} from "../interfaces/model";
import {IPayload} from "../../../processes/Context/Basket/interfaces";

export function useCreateIntersectionObserve (
    setLinksArr: React.Dispatch<any>,
    idContainer: string,
    classLinks: string,
    idObserveButton: string
) {

    useEffect(() => {
        const root = document.getElementById(idContainer)
        const links = Array.from(document.getElementsByClassName(classLinks))

        const observer = new IntersectionObserver(
            createIntersectionObserver(setLinksArr, "name", idObserveButton),
            {root: root, rootMargin: '0px', threshold: 1}
        )

        links.forEach(link => observer.observe(link))

        return () => observer.disconnect()
    }, [])
}

export function useModalWindowEvents (setIsShowModal: React.Dispatch<any>) {
    useEffect(() => {

        const event = () => setIsShowModal(false)

        document.addEventListener("click", event)

        return () => {
            setIsShowModal(false)
            document.removeEventListener("click", event)
        }
    }, [])
}

export function useReturnJsxCategorySection (
    data: ConceptionChoose200Response,
    router: NextRouter,
    basket: IPayload,
    dispatchBasket: Dispatch<IPayload>,
    dispatchInformModalWindow: Dispatch<any>
) {

    const [tagSection, setTagSection] = useState<ITagSection|null>(null)

    useEffect(() => {
        scrollToCategory(router, setTagSection)
        scrollToTagCategory(router, setTagSection)
    }, [router])

    return useMemo(() => {

        if (tagSection) {
            return(
                <Category
                    category={createTagCategory(data, tagSection.id)}
                    router={router}
                    data={data}
                    basket={basket}
                    dispatchBasket={dispatchBasket}
                    dispatchInformModalWindow={dispatchInformModalWindow}
                />
        )}

        return (
            <>
                {data.categories.map(category =>
                    <Category
                        key={category.id}
                        category={category}
                        data={data}
                        router={router}
                        basket={basket}
                        dispatchBasket={dispatchBasket}
                        dispatchInformModalWindow={dispatchInformModalWindow}
                    />
                )}
            </>
        )
    }, [tagSection, basket])
}

export function useReturnJsxHeaderCategoryLinks (
    categories: Array<ConceptionChoose200ResponseCategoriesInner>,
    classLinks: string,
    styleButton: SerializedStyles,
    router: NextRouter
) {
    return useMemo(() => (
        <>
            {
                categories.map((category, index) => (
                    <HeaderCategoryLink
                        key={category.id}
                        category={category}
                        classLinks={classLinks}
                        styleButton={styleButton}
                        router={router}
                        index={index}
                    />
                ))
            }
        </>
    ),[])
}

export function useReturnJsxHeaderModalCategoriesLink (
    linksArr: Array<ILinkObject>,
    isShowModal: boolean,
    setIsShowModal: React.Dispatch<boolean>,
    router: NextRouter,
    dishLength: number
) {
    return useMemo(() => (
        <HeaderModalCategoriesLink
            linksArr={linksArr}
            isShowModal={isShowModal}
            setIsShowModal={setIsShowModal}
            router={router}
            dishLength={dishLength}
        />
    ), [isShowModal, linksArr])
}