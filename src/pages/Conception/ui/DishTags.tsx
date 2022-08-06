import React from "react";
import {IDishTags} from "../interfaces/ui";
import Image from "next/image";
import {getDishTagsObjects} from "../model/functions";
import {css} from "@emotion/react";
import {styles} from "../styles/dishTags";
import {base64} from "../../../app";

const DishTags: React.FC<IDishTags> = ({dishTags, conceptionTags, styleContainer = {}}) => {

    const tags = getDishTagsObjects(dishTags, conceptionTags)

    return (
        <div
            css={css(styles.container, styleContainer)}
        >
            {
                tags.map(tag => (
                    <figure
                        key={tag.id}
                        css={css(styles.figure)}
                    >
                        <Image
                            src={tag.img}
                            alt={tag.name}
                            placeholder={"blur"}
                            blurDataURL={base64.pngImageGreyColor}
                            layout={"fill"}
                            objectFit={"contain"}
                        />
                    </figure>
                ))
            }
        </div>
    )
}

export default DishTags