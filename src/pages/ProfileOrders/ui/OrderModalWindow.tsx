import ModalWindow from "../../../shared/ModalWindow";
import React from "react";
import {IOrderModalWindow} from "../interfaces/ui";
import {navigation} from "../constants/navigation";
import {getIndexByParam} from "../../../features/Array";
import {deleteQueryParameter} from "../../../processes/Navigation";
import {css} from "@emotion/react";
import {styles} from "../styles/orderModalWindow";
import Image from "next/image";
import {base64} from "../../../app";
import {getDishImage} from "../../Conception/model/functions";
import {stylesScrollbar} from "../../../../styles/modules/stylesScrollbar";

const OrderModalWindow: React.FC<IOrderModalWindow> = ({orders, router}) => {

    const id = router.query[`${navigation.orderIdParam}`]

    if (!id) return null

    const order = orders[getIndexByParam(orders, id as string, v => v.id)]

    return (
        <ModalWindow
            isShow={true}
            onClickHide={() => router.push(
                deleteQueryParameter(
                    window.location.toString(), navigation.orderIdParam
                ),
                undefined,
                {shallow: true}
            )}
        >
            <section
                css={css(styles.section)}
            >
                <h1
                    css={css(styles.h1)}
                >
                    {order.name}
                </h1>
                <p
                    css={css(styles.address)}
                >
                    Доставлен на
                    {" "}
                    {order.address}
                </p>
                <div
                    css={css(styles.dishesBlock, stylesScrollbar.scrollbar)}
                >
                    {
                        order.products.map((product, index) => (
                            <div
                                key={product.productDetail.id + index}
                                css={css(styles.dishBlock)}
                            >
                                <figure
                                    css={css(styles.figure)}
                                >
                                    <Image
                                        css={css(styles.image)}
                                        src={getDishImage(product.productDetail.image)}
                                        alt={""}
                                        placeholder={"blur"}
                                        blurDataURL={base64.pngImageGreyColor}
                                        layout={"fill"}
                                        objectFit={"cover"}
                                    />
                                </figure>
                                <div
                                    css={css(styles.productInfoContainer)}
                                >
                                    <p
                                        css={css(styles.dishName)}
                                    >
                                        {product.productDetail.name}
                                    </p>
                                    <div
                                        css={css(styles.priceAndCountContainer)}
                                    >
                                        <p
                                            css={css(styles.dishPrice)}
                                        >
                                            {`${product.oldPrice}Р`}
                                        </p>
                                        <p
                                            css={css(styles.dishCount)}
                                        >
                                            {`${product.count} шт`}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <p
                    css={css(styles.countAndSum)}
                >
                    {order.products.length}
                    {" товара на "}
                    <span
                        css={css(styles.sum)}
                    >
                        {`${order.sum} Р`}
                    </span>
                </p>
            </section>
        </ModalWindow>
    )
}

export default OrderModalWindow