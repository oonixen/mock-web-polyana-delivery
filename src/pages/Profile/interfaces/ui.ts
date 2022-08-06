import React from "react";

export interface IVerifyCodeModalWindow {
    isShow: boolean,
    phone: string,
    dispatchInformModalWindow: React.Dispatch<any>,
    setIsShowVerifyCodeModalWindow: React.Dispatch<boolean>
}