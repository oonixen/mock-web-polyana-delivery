import React from "react";
import {IProfileUserForm} from "../interfaces/ui";
import {css} from "@emotion/react";
import {styles} from "../styles/main";
import {Avatar, Bonus} from "../../Icons"
import Form from "./Form";
import {useUserContext} from "../../../processes/Context";

export const Main: React.FC<IProfileUserForm> = ({styleContainer = {}}) => {

    const [{user, isLoaded}, dispatchUser] = useUserContext()

    if (isLoaded === false) return <></>
    else if (isLoaded === null || !user) return <></>

    return (
        <section
            css={css(styles.section, styleContainer)}
        >
            <div
                css={css(styles.topBlock)}
            >
                <div>
                    <p
                        css={css(styles.name)}
                    >
                        {user.firstName}
                    </p>
                    <div
                        css={css(styles.bonusesBlock)}
                    >
                        <figure
                            css={css(styles.figureBonus)}
                        >
                            <Bonus/>
                        </figure>
                        <span>
                            {`${user.bonus} бонусов`}
                        </span>
                    </div>
                </div>
                <figure
                    css={css(styles.figureAvatar)}
                >
                    <Avatar/>
                </figure>
            </div>
            <Form
                user={user}
                dispatchUser={dispatchUser}
            />
        </section>
    )
}

export default Main