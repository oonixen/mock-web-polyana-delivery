import {IJsxChildren} from "../../../app/interfaces/JsxElement";
import {SerializedStyles} from "@emotion/react";

export interface IHeaderBlock extends IJsxChildren{
    isSkeleton?: boolean,
    cssStyle?: SerializedStyles
}