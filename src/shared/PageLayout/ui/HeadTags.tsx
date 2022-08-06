import Head from "next/head";
import {IHeadTags} from "../interfaces/ui";
import React from "react";

const HeadTags: React.FC<IHeadTags> = ({
    title = "Поляна Delivery",
    description = "Официальный сервис доставки любимых блюд из Перчини, Чучвары, Дома Нино, Патари, Хокку и других ресторанов. Дарим 500 бонусных рублей на первый и последующие заказы!",
}) => {

    return (
        <Head>
            <title
                key={"title"}
            >
                {title}
            </title>
            <meta
                name={"description"}
                key={"description"}
                content={description}
            />
            <meta
                property={"og:site_name"}
                key={"og:site_name"}
                content={"polyana.delivery"}
            />
            <meta
                property={"og:type"}
                key={"og:type"}
                content={"website"}
            />
            <meta
                property={"og:title"}
                key={"og:title"}
                content={title}
            />
            <meta
                property={"og:description"}
                key={"og:description"}
                content={description}
            />
        </Head>
    )
}

export default HeadTags