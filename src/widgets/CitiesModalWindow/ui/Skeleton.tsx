import {ListItem, Skeleton as Skelet} from "@mui/material";
import {styles} from "../styles/skeleton";
import {css} from "@emotion/react";

const Skeleton = () => {

    const items = Array(3).fill({})

    return (
        <>
            {
                items.map((value, index) => (
                    <ListItem
                        key={index}
                        disablePadding
                        css={css(styles.button)}
                    >
                        <Skelet
                            variant="rectangular"
                            css={css(styles.skeleton)}
                        />
                    </ListItem>

                ))
            }
        </>
    )
}

export default Skeleton