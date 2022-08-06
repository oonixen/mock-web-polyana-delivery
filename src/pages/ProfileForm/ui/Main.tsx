import ProfileMainLayout from "../../../shared/ProfileMainLayout";
import {css} from "@emotion/react";
import {styles} from "../styles/name";
import ProfileUserForm from "../../../shared/ProfileUserForm";
import {useRedirectToProfileIfUnauthorized} from "../../../features/UserProfile";

const Main = () => {

    useRedirectToProfileIfUnauthorized()

    return (
        <ProfileMainLayout
            title={"Профиль"}
        >
            <ProfileUserForm
                styleContainer={css(styles.container)}
            />
        </ProfileMainLayout>
    )
}

export default Main