import React from "react";

export interface IAddMapScript {
    ({}:IAddMapScriptParams):void
}

interface IAddMapScriptParams {
    dispatchMap: React.Dispatch<any>
}