import React from "react";
import {IMarkets} from "../interfaces/ui";
import MarketsSkeleton from "./MarketsSkeleton";
import MarketsCarousel from "./MarketsCarousel";
import {styles} from "../styles/markets"
import {css} from "@emotion/react";

const Markets: React.FC<IMarkets> = ({data, dispatchInformModalWindow}) => {

    let jsx

    if (!data) jsx = <MarketsSkeleton/>
    else jsx = <MarketsCarousel markets={data.markets} dispatchInformModalWindow={dispatchInformModalWindow}/>

    return (
        <section>
            <ul
                css={css(styles.padding)}
            >
                {jsx}
            </ul>
        </section>
    )
}

export default Markets