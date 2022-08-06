import ProfileMainLayout from "../../../shared/ProfileMainLayout";
import Content from "./Content";
import {useRedirectToProfileIfUnauthorized} from "../../../features/UserProfile";

const Main = () => {

    useRedirectToProfileIfUnauthorized()

    return (
        <ProfileMainLayout
            title={"История заказов"}
        >
            <Content/>
        </ProfileMainLayout>
    )
}

export default Main