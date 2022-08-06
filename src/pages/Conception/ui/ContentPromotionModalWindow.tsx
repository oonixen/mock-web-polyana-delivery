import PromotionModalWindow from "../../../shared/PromotionModalWindow";
import React from "react";
import {useDeliveryAddressContext} from "../../../processes/Context";
import {IServerData} from "../interfaces/ui";

const ContentPromotionModalWindow: React.FC<IServerData> = ({data}) => {

    const [{address}] = useDeliveryAddressContext()
    const cityFiasId = address?.cityFiasId ? address.cityFiasId : ""

    return (
        <PromotionModalWindow
            promotions={data.promotions}
            cityFiasId={cityFiasId}
        />
    )
}

export default ContentPromotionModalWindow