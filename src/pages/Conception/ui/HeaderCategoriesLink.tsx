import {Button} from "@mui/material";
import {Bars} from "../../../shared/Icons";
import {css} from "@emotion/react";
import {stylesMuiButtonText} from "../../../../styles/modules/stylesMuiButtonText";
import {styles} from "../styles/headerCategoriesLink";
import React, {useState} from "react";
import {
    useCreateIntersectionObserve,
    useReturnJsxHeaderCategoryLinks,
    useReturnJsxHeaderModalCategoriesLink
} from "../model/hooks";
import {ILinkObject} from "../interfaces/model";
import {IHeaderCategoriesLink} from "../interfaces/ui";
import {useRouter} from "next/router";

const HeaderCategoriesLink: React.FC<IHeaderCategoriesLink> = ({data}) => {

    const idContainer = "CategoriesLink__id__container"
    const idObserveContainer = "CategoriesLink__id__observeContainer"
    const classLinks = "CategoriesLink__class__link"
    const [linksArr, setLinksArr] = useState<Array<ILinkObject>>([])
    const [isShowModal, setIsShowModal] = useState(false)
    const router = useRouter()
    const jsxLinks = useReturnJsxHeaderCategoryLinks(data.categories, classLinks, css(styles.button), router)
    const jsxLinksModal = useReturnJsxHeaderModalCategoriesLink(linksArr, isShowModal, setIsShowModal, router, data.categories.length)

    useCreateIntersectionObserve(setLinksArr, idContainer, classLinks, idObserveContainer)

    return (
        <div
            css={css(styles.container)}
            id={idContainer}
        >
            <nav
                css={css(styles.linkContainer)}
            >
                <ul>
                    {jsxLinks}
                </ul>
            </nav>
            <div
                id={idObserveContainer}
                css={css(styles.observeContainer)}
            >
                <Button
                    css={css(styles.button, styles.buttonObserver)}
                    endIcon={<figure css={css(styles.figureSvg)}><Bars fill={"#666262"}/></figure>}
                    onClick={(event) => {
                        event.stopPropagation()
                        setIsShowModal(!isShowModal)
                    }}
                >
                    <span
                        css={css(stylesMuiButtonText.text)}
                    >
                        Ещё
                    </span>
                </Button>
                {
                    linksArr.length > 0 && jsxLinksModal
                }
            </div>
        </div>
    )
}

export default HeaderCategoriesLink