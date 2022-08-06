import ScrollContainer from "react-indiana-drag-scroll";
import React, {useMemo} from "react";
import {ITagScrollGrid} from "../interfaces/ui";
import {css} from "@emotion/react";
import {styles} from "../styles/tagScrollGrid";
import Tags from "./Tags";
import {useRouter} from "next/router";

const TagScrollGrid: React.FC<ITagScrollGrid> = ({data}) => {

    const router = useRouter()
    const jsx = useMemo(() => (<Tags router={router} data={data}/>), [])

    return (
        <nav
            css={css(styles.nav)}
        >
            <ScrollContainer
                css={css(styles.scrollContainer)}
            >
                <ul
                    css={css(styles.ul)}
                >
                    {jsx}
                </ul>
            </ScrollContainer>
        </nav>
    )
}

export default TagScrollGrid