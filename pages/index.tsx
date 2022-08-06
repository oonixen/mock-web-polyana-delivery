import MainPage from "../src/pages/Main"
import {IMainPage} from "../src/pages/Main/interfaces/ui";
import {GetServerSideProps, NextPage} from "next";
import {getConceptionAll} from "../src/pages/Main/api/coneptionAll";
import {useRerenderServerSide} from "../src/pages/Main/model/hooks";
import {IMainServerSide} from "../src/pages/Main/interfaces/api";

export const getServerSideProps: GetServerSideProps = async (context) => {

    const address = context.query as IMainServerSide
    const data = await getConceptionAll({
        cityFiasId: address.cityFiasId,
        name: address.name,
        lat: Number(address.lat),
        lon: Number(address.lon)
    })

    return {
        props: {
            data: data
        }
    }
}

const Main: NextPage<IMainPage> = ({
    data,
}) => {

    useRerenderServerSide(data)

    return (
        <MainPage
            data={data}
        />
    )
}

export default Main