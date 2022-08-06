import React from "react";
import {IConceptionsBlock} from "../interfaces/ui";
import {styles} from "../styles/conceptionsBlock";
import {css} from "@emotion/react";
import Image from "next/image";
import shopsLabel from "../../../../public/shopsLabel.svg"
import restaurantsLabel from "../../../../public/restaurantsLabel.svg"
import Markets from "./Markets";
import Restaurants from "./Restaurants";
import {useInformModalWindowContext} from "../../../processes/Context";

const ConceptionsBlock: React.FC<IConceptionsBlock> = ({data}) => {

    const [{}, dispatchInformModalWindow] = useInformModalWindowContext()

    return (
        <div
            css={css(styles.main)}
        >
            <div
                css={css(styles.image)}
            >
                <Image
                    src={shopsLabel}
                    alt={""}
                    layout={"fill"}
                    objectFit={"contain"}
                />
            </div>
            <div
                css={css(styles.shopsBlock)}
            >
                <Markets
                    data={data}
                    dispatchInformModalWindow={dispatchInformModalWindow}
                />
            </div>
            <div
                css={css(styles.image)}
            >
                <Image
                    priority={true}
                    src={restaurantsLabel}
                    alt={""}
                    layout={"fill"}
                    objectFit={"contain"}
                />
            </div>
            <Restaurants
                data={data}
                dispatchInformModalWindow={dispatchInformModalWindow}
            />
        </div>
    )
}

export default ConceptionsBlock