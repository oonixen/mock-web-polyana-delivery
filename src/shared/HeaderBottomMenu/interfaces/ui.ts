import React from "react";
import {IJsxChildren} from "../../../app";
import {SerializedStyles} from "@emotion/react";

export interface IHeaderBottomMenu extends IJsxChildren{
    styleContainer?: SerializedStyles
}

export interface IBarButton {
    isShow: boolean,
    setIsShow: React.Dispatch<boolean>
}