import {css} from "@emotion/react";
import {styles} from "../styles/restaurants";
import React from "react";
import {IRestaurants} from "../interfaces/ui";
import {RestaurantsSkeleton} from "./RestaurantsSkeleton";
import {RestaurantsGrid} from "./RestaurantsGrid";

const Restaurants: React.FC<IRestaurants> = ({data, dispatchInformModalWindow}) => {

    let jsx

    if (!data) jsx = <RestaurantsSkeleton/>
    else jsx = <RestaurantsGrid restaurants={data.restaurants} dispatchInformModalWindow={dispatchInformModalWindow}/>

    return (
        <section>
            <ul
                css={css(styles.ul)}
            >
                {jsx}
            </ul>
        </section>
    )
}

export default Restaurants