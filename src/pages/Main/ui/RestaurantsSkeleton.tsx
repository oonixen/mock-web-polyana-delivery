import {Skeleton} from "@mui/material";
import {css} from "@emotion/react";
import {styles} from "../styles/restaurantsGrid";
import React from "react";

export const RestaurantsSkeleton = () => {

    const array = Array(6).fill({})

    return (
        <>
            {
                array.map((v, i) => (
                    <Skeleton
                        key={i}
                        variant={"rectangular"}
                        css={css(styles.imageBlock)}
                    />
                ))
            }
        </>
    )
}