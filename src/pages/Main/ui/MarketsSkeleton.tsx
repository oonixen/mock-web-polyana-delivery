import {Skeleton} from "@mui/material";
import {css} from "@emotion/react";
import {styles} from "../styles/marketsSkeleton"

const MarketsSkeleton = () => (
    <div
        css={css(styles.skeletonBlock)}
    >
        {
            Array(6).fill({}).map((v, i) => (
                <Skeleton
                    key={i}
                    css={css(styles.skeleton)}
                    variant={"rectangular"}
                />
            ))
        }
    </div>
)

export default MarketsSkeleton