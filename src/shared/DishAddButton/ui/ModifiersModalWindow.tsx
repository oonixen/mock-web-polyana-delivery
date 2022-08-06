import ModalWindow from "../../ModalWindow";
import React, {useState} from "react";
import {IModifiersModalWindow} from "../interfaces/ui";
import {styles} from "../styles/modifiersModalWindow"
import {css} from "@emotion/react";
import CheckboxModifier from "./CheckboxModifier";
import RadioModifier from "./RadioModifier";
import {ProductForServerModifiersInner} from "../../../../api";
import DishModalWindowContainer from "../../DishModalWindowContainer";
import {getPriceModifiers} from "../../../entities/Basket";
import {addDishWithModifier} from "../model/functions";

const ModifiersModalWindow: React.FC<IModifiersModalWindow> = ({
    isShowModal,
    setIsShowModal,
    dish,
    dispatchInformModalWindow,
    basket,
    dispatchBasket
}) => {

    const [serverModifiers, setServerModifiers] = useState<Array<ProductForServerModifiersInner>>([])
    const price = dish.price + getPriceModifiers(serverModifiers)

    return (
        <ModalWindow
            isShow={isShowModal}
            onClickHide={() => setIsShowModal(false)}
        >
            <DishModalWindowContainer
                sum={price}
                onClickAddButton={() => {
                    addDishWithModifier(
                        serverModifiers,
                        dispatchInformModalWindow,
                        setIsShowModal,
                        dish,
                        basket,
                        dispatchBasket
                    )
                }}
            >
                <div
                    css={css(styles.container)}
                >
                    {
                        // @ts-ignore
                        dish.modifiers.map(modifier => (
                            <div
                                key={modifier.id}
                            >
                                <p
                                    css={css(styles.p)}
                                >
                                    {modifier.name}
                                </p>
                                {
                                    modifier.maxAmount > 1 ?
                                        <CheckboxModifier
                                            modifier={modifier}
                                            serverModifiers={serverModifiers}
                                            setServerModifiers={setServerModifiers}
                                            dispatchInformModalWindow={dispatchInformModalWindow}
                                        />
                                        :
                                        <RadioModifier
                                            modifier={modifier}
                                            serverModifiers={serverModifiers}
                                            setServerModifiers={setServerModifiers}
                                            dispatchInformModalWindow={dispatchInformModalWindow}
                                        />
                                }
                            </div>
                        ))
                    }
                </div>
            </DishModalWindowContainer>
        </ModalWindow>
    )
}

export default ModifiersModalWindow