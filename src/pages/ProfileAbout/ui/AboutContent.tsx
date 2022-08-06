import React from "react";
import {IAboutContent} from "../interfaces/interfaces";
import Image from "next/image";
import {css} from "@emotion/react";
import {styles} from "../styles/aboutContent";
import {base64} from "../../../app";

const AboutContent: React.FC<IAboutContent> = ({aboutInfo}) => {

    return (
        <div>
            <p
                css={css(styles.p)}
            >
                {aboutInfo.description}
            </p>
            <figure
                css={css(styles.figure)}
            >
                <Image
                    css={css(styles.image)}
                    src={aboutInfo.img}
                    alt={""}
                    placeholder={"blur"}
                    blurDataURL={base64.pngImageGreyColor}
                    layout={"fill"}
                    objectFit={"cover"}
                />
            </figure>
        </div>
    )
}

export default AboutContent