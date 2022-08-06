import HeadTags from "./HeadTags";
import React from "react";
import {IPageLayout} from "../interfaces/ui";

const PageLayout: React.FC<IPageLayout> = ({
    children,
    description,
    title
}) => {

    return (
        <>
            <HeadTags
                description={description}
                title={title}
            />
            {
                children
            }
        </>
    )
}

export default PageLayout