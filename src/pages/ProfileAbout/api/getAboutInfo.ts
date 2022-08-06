import {iHttpRequest} from "../../../processes/Services/HttpRequest/classes";
import {PostUserAbout200Response, UserApi} from "../../../../api";
import {Dispatch} from "react";
import {showInformModalWindow} from "../../../processes/Context";

export function getAboutInfo (setAboutInfo: Dispatch<any>, dispatchInformModalWindow: Dispatch<any>) {
    iHttpRequest.requestApi<PostUserAbout200Response, UserApi>({
        ApiClass: UserApi,
        request: ApiClass => ApiClass.postUserAbout(),
        successCallback: response => setAboutInfo(response.data),
        errorCallback: error => showInformModalWindow(dispatchInformModalWindow, "Не удалось загрузить страницу")
    })
}