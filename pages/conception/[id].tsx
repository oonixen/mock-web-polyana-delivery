import ConceptionPage from "../../src/pages/Conception";
import React from "react";
import {IConceptionPageServerSide} from "../../src/pages/Conception/interfaces/ui";
import RedirectPage from "../../src/shared/RedirectPage";
import {rootRoute} from "../../src/app";
import {GetServerSideProps} from "next";
import {getConception} from "../../src/pages/Conception/api/getConception";
import {IConceptionParams} from "../../src/pages/Conception/interfaces/api";

export const getServerSideProps: GetServerSideProps = async (context) => {

    const {id, cityFiasId, name, lon, lat} = context.query as IConceptionParams

    const data = await getConception({
        conceptionId: id, address: {cityFiasId, name, lon: Number(lon), lat: Number(lat)}
    })

    return {
        props: {
            data: data
        }
    }
}

const Conception: React.FC<IConceptionPageServerSide> = ({data}) => {

    if (!data) return <RedirectPage redirectUrl={rootRoute()}/>

    return (
        <ConceptionPage data={data}/>
    )
}

export default Conception