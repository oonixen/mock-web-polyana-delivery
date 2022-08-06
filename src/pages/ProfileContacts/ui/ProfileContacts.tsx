import ProfileMainLayout from "../../../shared/ProfileMainLayout";
import ProfileSection from "../../../shared/ProfileSection";
import Content from "./Content";
import {useRedirectToProfileIfUnauthorized} from "../../../features/UserProfile";

const ProfileContacts = () => {

    useRedirectToProfileIfUnauthorized()

    return (
        <ProfileMainLayout
            title={"Контакты"}
        >
            <ProfileSection>
                <Content/>
            </ProfileSection>
        </ProfileMainLayout>
    )
}

export default ProfileContacts