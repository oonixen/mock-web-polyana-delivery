import {Skeleton as SkeletonBlock} from "@mui/material";
import {styles} from "../styles/skeleton";
import {css} from "@emotion/react";

const Skeleton = () => {

    return (
        <div
            css={css(styles.container)}
        >
            <div
                css={css(styles.div)}
            >
                <SkeletonBlock
                    css={css(styles.skeleton1)}
                    variant={"rectangular"}
                />
                <SkeletonBlock
                    css={css(styles.skeleton2)}
                    variant={"rectangular"}
                />
            </div>
            <div
                css={css(styles.div)}
            >
                <SkeletonBlock
                    css={css(styles.skeleton3)}
                    variant={"text"}
                />
                <SkeletonBlock
                    css={css(styles.skeleton4)}
                    variant={"circular"}
                />
            </div>
        </div>
    )
}

export default Skeleton