import ModalWindow from "../../ModalWindow";
import {useRouter} from "next/router";
import {deleteQueryParameter} from "../../../processes/Navigation";
import {navigation} from "../variables/navigation";
import React from "react";
import {IPromotionModalWindow} from "../interfaces/ui";
import PromotionModalWindowContent from "./PromotionModalWindowContent";
import {getIndexByParam} from "../../../features/Array";
import {Promotion} from "../../../../api";

const PromotionModalWindow: React.FC<IPromotionModalWindow> = ({
    promotions,
    isShowAllPromotionsButton = true,
    cityFiasId
}) => {

    const router = useRouter()
    const promotionId = String(router.query.promotion)
    const promotion = promotions[
        getIndexByParam<Promotion, string>(promotions, promotionId, (value) => value.id)
    ]

    return (
        <ModalWindow
            isShow={Boolean(promotion)}
            onClickHide={() => {
                router.push(
                    deleteQueryParameter(window.location.toString(), navigation.promotionQueryName),
                    undefined,
                    {shallow: true}
                )
            }}
        >
            {
                promotion &&
                    <PromotionModalWindowContent
                        promotion={promotion}
                        isShowAllPromotionsButton={isShowAllPromotionsButton}
                        cityFiasId={cityFiasId}
                    />
            }
        </ModalWindow>
    )
}

export default PromotionModalWindow