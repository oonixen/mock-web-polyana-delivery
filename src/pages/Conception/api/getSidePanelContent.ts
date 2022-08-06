import {iHttpRequest} from "../../../processes/Services/HttpRequest/classes";
import {DefaultApi, GetSidePanel200Response} from "../../../../api";
import {Dispatch} from "react";

export function getSidePanelContent (
    setContent: Dispatch<GetSidePanel200Response>
) {

    iHttpRequest.requestApi<GetSidePanel200Response, DefaultApi>({
        ApiClass: DefaultApi,
        request: ApiClass => ApiClass.getSidePanel(),
        successCallback: response => setContent(response.data)
    })
}