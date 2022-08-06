import React, {useEffect, useState} from "react";
import {IContent} from "../interfaces/ui";
import OrdersList from "./OrdersList";
import {PostUserOrders200ResponseInner} from "../../../../api";
import {useInformModalWindowContext} from "../../../processes/Context";
import {getUsersOrders} from "../api/getUsersOrders";
import ProfileSection from "../../../shared/ProfileSection";
import CenterLoader from "../../../shared/CenterLoader";

const Content: React.FC<IContent> = () => {

    const [orders, setOrders] = useState<PostUserOrders200ResponseInner[]|null>(null)
    const [, dispatchInformModalWindow] = useInformModalWindowContext()

    useEffect(() => {
        getUsersOrders(null, setOrders, dispatchInformModalWindow)
    }, [])

    if (orders === null) return <CenterLoader/>

    return (
        <ProfileSection
            title={"Заказы"}
        >
            <OrdersList
                orders={orders}
            />
        </ProfileSection>
    )
}

export default Content