import {IJsxChildren} from "../../../app";

export interface IModalWindow extends IJsxChildren{
    isShow: boolean,
    onClickHide?: () => void,
    isShowHideButton?: boolean
}