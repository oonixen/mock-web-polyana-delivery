import React from "react";
import {getIndexByParam} from "../../../features/Array";
import {ILinkObject, ITagSection} from "../interfaces/model";
import {
    ConceptionChoose200Response,
    ConceptionChoose200ResponseCategoriesInner,
    ConceptionChoose200ResponseTagsInner,
    ProductDetail
} from "../../../../api";
import StubImage from "../../../../public/stub.png";
import {navigation} from "../constants/navigation";
import {selectors} from "../constants/selectors";
import {NextRouter} from "next/router";
import {deleteQueryParameter} from "../../../processes/Navigation";
import {delay} from "../../../features/Any";

export const createIntersectionObserver = (setDishesArr: React.Dispatch<any>, textParam: string, idObserveButton: string) => {

    const arr: Array<ILinkObject> = []
    let trigger = true
    const yetButton = document.getElementById(idObserveButton)

    return (entries: IntersectionObserverEntry[]) => {

        entries.forEach(entry => {
            const target = entry.target as HTMLElement
            const dishName = String(target.textContent)

            if (entry.isIntersecting) {
                target.style.visibility = 'visible'
                arr.splice(getIndexByParam(arr, dishName, value => value.name), 1)
            }
            else {
                const obj:ILinkObject = {name: dishName}

                trigger ? arr.push(obj) : arr.unshift(obj)
                target.style.visibility = 'hidden'
            }
        })

        trigger = false

        if (arr.length && yetButton) yetButton.style.display = 'flex'
        else if (yetButton) yetButton.style.display = 'none'

        setDishesArr(JSON.parse(JSON.stringify(arr)))
    }
}

export function getDishTagsObjects (dishTags: Array<String>, conceptionTags: Array<ConceptionChoose200ResponseTagsInner>) {
    const tags: Array<ConceptionChoose200ResponseTagsInner> = []

    dishTags.forEach(dishTag => {
        for (const conceptionTag of conceptionTags)
            if (conceptionTag.id === dishTag) return tags.push(conceptionTag)
    })

    return tags
}

export function getAllDishes (data: ConceptionChoose200Response) {
    const dishes: Array<ProductDetail> = []
    data.categories.forEach(category => category.products.forEach(product => dishes.push(product)))
    return dishes
}

export function getDishImage (image: string|undefined) {
    return image ? image : StubImage
}

export async function scrollToCategory (router: NextRouter, setTagSection: React.Dispatch<null>) {

    const categoryIndexString = router.query[navigation.categoryQueryParam]

    if (!categoryIndexString) return

    setTagSection(null)
    router.push(deleteQueryParameter(
            String(window.location),
            navigation.categoryQueryParam
        ),
        undefined,
        {shallow: true}
    )
    await delay(10)
    scrollToCategoryElement(Number(categoryIndexString))
}

export async function scrollToTagCategory (router: NextRouter, setTagSection: React.Dispatch<ITagSection>) {

    const tagIdParam = router.query[navigation.tagQueryParam]

    if (!tagIdParam) return

    setTagSection({id:String(tagIdParam)})
    router.push(deleteQueryParameter(
            String(window.location),
            navigation.tagQueryParam
        ),
        undefined,
        {shallow: true}
    )
    await delay(10)
    scrollToCategoryElement(Number(0))
}

function scrollToCategoryElement (categoryIndex: number) {
    const section = document.querySelectorAll(`#${selectors.categorySectionId} > div > div`)[categoryIndex]
    const sectionReact = section.getBoundingClientRect()
    const bodyReact = document.body.getBoundingClientRect()
    const windowClientWidth = document.body.clientWidth
    const indent = windowClientWidth > 600 ? 160 : 130

    window.scrollTo({top: sectionReact.top - bodyReact.top - indent})
}

export function createTagCategory (data: ConceptionChoose200Response, tagId: string): ConceptionChoose200ResponseCategoriesInner {

    const tagObj = data.tags[
        getIndexByParam<ConceptionChoose200ResponseTagsInner, string>(data.tags, tagId, v => v.id)
    ]
    const obj: ConceptionChoose200ResponseCategoriesInner = {
        title: tagObj.name,
        id: tagObj.id,
        products: []
    }

    data.categories.forEach(category => {
        category.products.forEach(product => {
            product.tags.forEach(tag => {
                if (tag === tagId) obj.products.push(product)
            })
        })
    })

    return obj
}