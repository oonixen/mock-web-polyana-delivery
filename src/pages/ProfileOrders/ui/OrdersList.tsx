import React, {useEffect, useState} from "react";
import {IOrderList} from "../interfaces/ui";
import {symbols} from "../../../app";
import {css} from "@emotion/react";
import {styles} from "../styles/ordersList";
import {stylesButtonText} from "../../../../styles/modules/stylesButtonText";
import OrderModalWindow from "./OrderModalWindow";
import {useRouter} from "next/router";
import {addQueryParameter} from "../../../processes/Navigation";
import {navigation} from "../constants/navigation";
import {PostUserOrders200ResponseInner} from "../../../../api";
import {useInformModalWindowContext} from "../../../processes/Context";
import {getUsersOrders} from "../api/getUsersOrders";
import BackdropLoader from "../../../shared/BackdropLoader";

const OrdersList: React.FC<IOrderList> = ({orders}) => {

    const router = useRouter()

    return (
        <>
            <div>
                {
                    orders.map(order => (
                        <div
                            key={order.id}
                            css={css(styles.container)}
                        >
                            <div
                                css={css(styles.infoContainer)}
                            >
                                <p
                                    css={css(order.isActive ? styles.activeName : {})}
                                >
                                    {`${order.name} - `}
                                    <span
                                        css={css(styles.status)}
                                    >
                                    {order.status}
                                </span>
                                </p>
                                <p
                                    css={css(styles.date)}
                                >
                                    {order.date}
                                </p>
                                <p
                                    css={css(styles.address)}
                                >
                                    {order.address}
                                </p>
                            </div>
                            <div
                                css={css(styles.navContainer)}
                            >
                                <p
                                    css={css(styles.sum)}
                                >
                                    {`${order.sum}${symbols.ruble}`}
                                </p>
                                <a
                                    css={css(styles.a)}
                                    onClick={() => router.push(
                                        addQueryParameter(
                                            window.location.toString(), navigation.orderIdParam, order.id
                                        ),
                                        undefined,
                                        {shallow: true}
                                    )}
                                >
                                <span
                                    css={css(stylesButtonText.text)}
                                >
                                    подробнее
                                </span>
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
            <OrderModalWindow
                orders={orders}
                router={router}
            />
        </>
    )
}

export default OrdersList