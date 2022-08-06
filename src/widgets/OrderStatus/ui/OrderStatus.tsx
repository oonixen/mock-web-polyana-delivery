import {css} from "@emotion/react";
import {styles} from "../styles/orderStatus";
import {Cap} from "../../../shared/Icons";
import {useState} from "react";
import {useUpdateOrderInfo} from "../model/hooks";
import {PostOrderActiveStatus200Response} from "../../../../api";
import {useRouter} from "next/router";
import {basketOrderRoute, basketRoute} from "../../../app";

const OrderStatus = () => {

    const [orderInfo, setOrderInfo] = useState<PostOrderActiveStatus200Response|null>(null)
    const router = useRouter()

    useUpdateOrderInfo(setOrderInfo)

    if (!orderInfo || [basketRoute(), basketOrderRoute()].includes(router.pathname+"/")) return null

    return (
        <section
            css={css(styles.section)}
        >
            <figure
                css={css(styles.figure)}
            >
                <Cap/>
            </figure>
            <div
                css={css(styles.infoContainer)}
            >
                <p
                    css={css(styles.text, styles.name)}
                >
                    {orderInfo.name}
                </p>
                <p
                    css={css(styles.text, styles.status)}
                >
                    {orderInfo.status}
                </p>
            </div>
        </section>
    )
}

export default OrderStatus