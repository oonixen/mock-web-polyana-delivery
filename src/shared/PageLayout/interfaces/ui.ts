import {IJsxChildren} from "../../../app/interfaces/JsxElement";

export interface IPageLayout extends IHeadTags, IJsxChildren{
}

export interface IHeadTags {
    title?: string,
    description?: string
}