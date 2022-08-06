import ProfileMainLayout from "../../../shared/ProfileMainLayout";
import Content from "./Content";
import {useRedirectToProfileIfUnauthorized} from "../../../features/UserProfile";

const Main = () => {

    useRedirectToProfileIfUnauthorized()

    return (
        <ProfileMainLayout
            title={"О нас"}
        >
            <Content/>
        </ProfileMainLayout>
    )
}

export default Main