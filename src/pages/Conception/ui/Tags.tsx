import {css} from "@emotion/react";
import {styles} from "../styles/tags";
import {Button} from "@mui/material";
import {stylesMuiButtonText} from "../../../../styles/modules/stylesMuiButtonText";
import React from "react";
import {ITags} from "../interfaces/ui";
import {addQueryParameter} from "../../../processes/Navigation";
import {navigation} from "../constants/navigation";

const Tags: React.FC<ITags> = ({data, router}) => {

    return (
        <>
            {
                data.tags.map(tag => (
                    <li
                        key={tag.id}
                        css={css(styles.li)}
                    >
                        <a
                            onClick={() => router.push(addQueryParameter(
                                    String(window.location),
                                    navigation.tagQueryParam,
                                    tag.id
                                ),
                                undefined,
                                {shallow: true}
                            )}
                        >
                            <Button
                                css={css(styles.button)}
                                variant={"outlined"}
                            >
                                <span
                                    css={css(stylesMuiButtonText.text)}
                                >
                                    {tag.name}
                                </span>
                            </Button>
                        </a>
                    </li>
                ))
            }
        </>
    )
}

export default Tags