import PromotionsPage from "../../src/pages/Promotions"
import {GetServerSideProps} from "next";
import {rootRoute} from "../../src/app";
import {getPromotions} from "../../src/pages/Promotions/api/getPromotions";
import React from "react";
import {IPromotions} from "../../src/pages/Promotions/interfaces/ui";
import RedirectPage from "../../src/shared/RedirectPage";
import {IPromotionsServerSide} from "../../src/pages/Promotions/interfaces/api";

export const getServerSideProps: GetServerSideProps = async (context) => {

    const {cityFiasId} = context.query as IPromotionsServerSide

    const data = await getPromotions(cityFiasId)

    return {
        props: {
            data: data
        }
    }
}

const Promotions: React.FC<IPromotions> = ({data}) => {

    if (!data) return <RedirectPage redirectUrl={rootRoute()}/>

    return <PromotionsPage promotions={data}/>
}

export default Promotions