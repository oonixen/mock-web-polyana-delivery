import {css} from "@emotion/react";
import {styles} from "./styles";
import React from "react";
import ProfileUserForm from "../ProfileUserForm";
import {IProfileSection} from "./interfaces";

const Main: React.FC<IProfileSection> = ({title, children}) => {
    return (
        <section>
            {
                title &&
                    <h1>
                        {title}
                    </h1>
            }
            <div
                css={css(styles.contentContainer)}
            >
                <div
                    css={css(styles.childrenContainer)}
                >
                    {children}
                </div>
                <div
                    css={css(styles.profileFormContainer)}
                >
                    <ProfileUserForm/>
                </div>
            </div>
        </section>
    )
}

export default Main