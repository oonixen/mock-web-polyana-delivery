import React, {Dispatch} from "react";
import {Address} from "../../../../api";
import {TwoGisMap} from "../../../features/Map";

export interface IOnInputSuggestion {
    (): ({}:IParamMakeSuggestionRequest) => void
}

export interface IMakeSuggestionRequest {
    ({}: IParamMakeSuggestionRequest):void
}

interface IParamMakeSuggestionRequest {
    address: string,
    cityFiasId: string,
    dispatchInformModalWindow: React.Dispatch<any>,
    setSuggestions: React.Dispatch<Array<Address>>,
    setIsLoadingSuggestions: React.Dispatch<boolean>
}

export interface IUseInitApp {
    ({}: IUseInitAppParams): void
}

interface IUseInitAppParams extends IParam {
    mapId: string,
    center: Array<number>,
    currentAddress: Address|null,
}

export interface ILaunchMap {
    ({}:ILaunchMapParams):void
}

interface ILaunchMapParams {
    mapId: string,
    center: Array<number>,
    dispatchInformModalWindow: React.Dispatch<any>,
    setCurrentAddress: React.Dispatch<Address>,
    cityFiasId: string,
    setIsLoading: React.Dispatch<boolean>,
    setMap: Dispatch<TwoGisMap|null>,
    currentAddress: Address|null
}

export interface IMakeMapSuggestRequest{
    ({}:IMakeMapSuggestRequestParam): void
}

interface IMakeMapSuggestRequestParam extends IParam {
    lat: number,
    lon: number,
}

export interface IOnClickGeoPosition {
    ({}: IParam) : void
}

interface IParam {
    setCurrentAddress: React.Dispatch<Address>
    dispatchInformModalWindow: React.Dispatch<any>,
    cityFiasId: string,
    setIsLoading: React.Dispatch<boolean>
}

export interface IOnClickSubmit {
    ({}: IOnClickSubmitParams): void
}

interface IOnClickSubmitParams {
    dispatchInformModalWindow: React.Dispatch<any>,
    currentAddress: Address|null,
    dispatchAddress: React.Dispatch<Address>,
    dispatchDeliveryAddressModalWindow: Dispatch<any>
}