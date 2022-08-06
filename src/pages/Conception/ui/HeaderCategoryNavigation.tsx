import {css} from "@emotion/react";
import {styles} from "../styles/headerCategoryNavigation";
import React from "react";
import {ICategoryNavigation} from "../interfaces/ui";
import Image from "next/image";
import HeaderDishSearchInput from "./HeaderDishSearchInput";
import HeaderCategoriesLink from "./HeaderCategoriesLink";
import HeaderCategoryScrollGrid from "./HeaderCategoryScrollGrid";

const HeaderCategoryNavigation: React.FC<ICategoryNavigation> = ({
    data
}) => {

    return (
        <section
            css={css(styles.section)}
        >
            <div
                style={{backgroundColor: data.headerColor}}
                css={css(styles.containerBigScreen)}
            >
                <div
                    css={css(styles.logoContainer)}
                >
                    <Image
                        src={data.headerLogoImg}
                        alt={""}
                        layout={"fill"}
                        objectFit={"cover"}
                    />
                </div>
                <HeaderDishSearchInput data={data}/>
                <HeaderCategoriesLink data={data}/>
            </div>
            <div
                css={css(styles.containerSmallScreen)}
            >
                <HeaderCategoryScrollGrid data={data}/>
            </div>
        </section>
    )
}

export default HeaderCategoryNavigation