import React, {useEffect, useState} from "react";
import {PostUserAbout200Response} from "../../../../api";
import {getAboutInfo} from "../api/getAboutInfo";
import {useInformModalWindowContext} from "../../../processes/Context";
import ProfileSection from "../../../shared/ProfileSection";
import AboutContent from "./AboutContent";
import CenterLoader from "../../../shared/CenterLoader";

const Content = () => {

    const [aboutInfo, setAboutInfo] = useState<PostUserAbout200Response|null>(null)
    const [, dispatchInformModalWindow] = useInformModalWindowContext()

    useEffect(() => {
        getAboutInfo(setAboutInfo, dispatchInformModalWindow)
    }, [])

    if (!aboutInfo) return <CenterLoader/>

    return (
        <ProfileSection
            title={"О нас"}
        >
            <AboutContent
                aboutInfo={aboutInfo}
            />
        </ProfileSection>
    )
}

export default Content